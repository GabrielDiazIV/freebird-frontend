import "./App.css";
import { useState, useEffect } from "react";
import { DataClient } from "./DataServiceClientPb";
import { TweetStreamRequest, Bird, BirdsRequest, FreebirdEntity } from "./data_pb";
import Card from "./Card";

type BirdState = {
  b: Bird,
  twts: Date[]
}

function App() {
  const [toggle, setToggle] = useState(false);
  const [popping, setPopping] = useState(false);
  const [birds, setBirds] = useState<Map<number, BirdState>>(new Map());

  const pop = () => {
    setPopping(true);
    setTimeout(() => setPopping(false), 500);
  };



  useEffect(() => {
    const client = new DataClient("http://54.176.207.60:8080");
    const res = client.tweetStream(new TweetStreamRequest());

    const MINUTE = 60 * 1000
    const getData = (b: Bird) => {
      pop()
      const curr = birds.get(b.getId())
      if (!curr) {
        birds.set(b.getId(), { b, twts: [new Date()] })
      } else {
        const twts = curr.twts.filter((t: Date) => t.getTime() + MINUTE > Date.now());
        twts.push(new Date())
        birds.set(b.getId(), { b, twts })

        setBirds(new Map(birds));
      }
    }
    const fetchBootstrap = async () => {
      const _birds = await client.getAllBirds(new BirdsRequest(), null);
      console.log(_birds.getBirdsList())
      _birds.getBirdsList().forEach((b) => birds.set(b.getId(), { b, twts: [new Date()] }));
      setBirds(birds);
    }

    fetchBootstrap().catch((err) => {
      console.log(err)
    })

    res.on("data", getData);
    return () => {
      res.removeListener("data", getData)
    }
  }, [birds]);

  const score = (b: Bird) => {
    return b.getNPositive() / (b.getNNegative() + 1)
  }

  const sortedBirds = () => {
    return Array.from(birds.values()).sort((b1, b2) => score(b2.b) - score(b1.b))
  }

  const buttonClass = function(active: boolean) {
    return active
      ? "font-bold w-1/2 bg-white hover:bg-slate-100 bluesht transition-all duration-200"
      : "w-1/2 bg-white hover:bg-slate-100 bluesht-disabled transition-all";
  };

  const popSrc = () => {
    return !popping ? "/close.gif" : "/pop-cat.gif";
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen topo-bg">
      {/* top level container 
      under create two subcontainers
      one has data and one has the buttons
      apply sticky to buttons and ur good */}
      <header className="flex sticky top-0 z-50 flex-col items-center w-5/12 bg-white border-1">
        <div className="flex flex-col items-center w-full">
          <img alt="yay" className="w-20 h-20" src={popSrc()} />
          <button onClick={(_) => pop()} className="ml-4 text-4xl font-bold">
            FreeBird
          </button>
        </div>

        <div className="flex flex-col w-full bg-white">
          {/* buttons */}
          <div className="flex justify-between">
            <button
              className={buttonClass(toggle)}
              onClick={(_) => {
                setToggle(!toggle);
              }}
            >
              <div className="pt-4 pb-3">Companies</div>
            </button>
            <button
              className={buttonClass(!toggle)}
              onClick={(_) => {
                setToggle(!toggle);
              }}
            >
              <div className="pt-4 pb-3">People</div>
            </button>
          </div>
        </div>
      </header>
      <div className="flex relative flex-col w-5/12 bg-white border-t-0 border-b-0 border-1">

        {
          sortedBirds().map((b: BirdState) => {
            if (b.b.getEntityType() === FreebirdEntity.COMPANY && toggle)
              return (
                <Card key={b.b.getId()} bird={b.b} twts={b.twts} />
              )
            if (b.b.getEntityType() === FreebirdEntity.SHILL && !toggle)
              return (
                <Card key={b.b.getId()} bird={b.b} twts={b.twts} />
              )
            return <></>
          })
        }
      </div>
    </div>
  );
}

export default App;

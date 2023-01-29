import "./App.css";
import { useState, useEffect } from "react";
import Leaderboard from "./Leaderboard";
import { DataClient } from "./DataServiceClientPb";
import { TweetStreamRequest, Bird } from "./data_pb";
import Card from "./Card";

function App() {
  const [toggle, setToggle] = useState(false);
  const [popping, setPopping] = useState(false);

  const pop = () => {
    setPopping(true);
    setTimeout(() => setPopping(false), 500);
  };

  const getData = (x: Bird) => console.log(x.getImgUrl());

  useEffect(() => {
    const client = new DataClient("http://localhost:8080");
    const res = client.tweetStream(new TweetStreamRequest());
    // @ts-ignore
    const id = res.on("data", getData);
	return () => {
    // @ts-ignore
		res.removeListener("data", getData)
	}
  }, []);

  const buttonClass = function (active: boolean) {
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
          <img className="w-20 h-20" src={popSrc()} />
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
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;

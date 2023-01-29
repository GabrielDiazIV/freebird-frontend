import CardDetails from "./CardDetails";
import { useEffect, useState } from "react";
import { DataClient } from "./DataServiceClientPb";
import { BirdRequest, Tweet, Bird } from "./data_pb";
import { json } from "stream/consumers";

export type CardProps = {
  bird: Bird
  twts: Date[]
}

export default function Card({ twts, bird }: CardProps) {
  const [show, setShow] = useState(false);
  const score = (b: Bird) => {
    return b.getNPositive() / (b.getNNegative() + 1)
  }

  const [tweets, setTweets] = useState<Tweet[]>([]);
  useEffect(() => {
    const client = new DataClient("http://54.176.207.60:8080");

    const fetchBootstrap = async () => {
      console.log("here")
      const req = new BirdRequest()
      req.setId(bird.getId())
      const _bird = await client.getBirdTweets(req, null);
      const list = _bird.getTweetsList()
      console.log(list)
      setTweets([...list])
    }
    fetchBootstrap().catch(() => setTweets([]))

  }, [])

  const general = function(active: number, threshold: number) {
    return active > threshold
      ? "text-center text-xl text-green-500"
      : "text-center text-xl text-red-500";
  };

  return (
    <div>
      <div className="flex flex-row gap-x-3 px-4 pt-2 pb-4 w-full border-b-1">
        <div className="flex flex-row gap-x-4 justify-center items-center">
          <img alt="pfp" src={bird.getImgUrl()} className="self-start w-16 h-16 rounded-full"></img>
        </div>
        <div className="flex flex-col flex-1 gap-y-1 justify-between">
          <div className="flex flex-row justify-between">
            <p>
              <span className="font-bold">{bird.getName()}</span> @{bird.getName()}
            </p>
            <button onClick={(_) => setShow(!show)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 tweet-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 pr-8">
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 text-xs tweet-color">Sentiment score:</span>
              <span className={general(score(bird), 1)}>{score(bird).toFixed(2)}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 text-xs tweet-color">Positive tweets:</span>
              <span className="text-xl text-center">{bird.getNPositive()}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 text-xs tweet-color">Negative tweets:</span>
              <span className="text-xl text-center">{bird.getNNegative()}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 text-xs tweet-color">Total tweets:</span>
              <span className="text-xl text-center">{bird.getNPositive() + bird.getNNegative()}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 text-xs tweet-color">Tweets per minute</span>
              <span className="text-xl text-center">{(twts.length / 1000 * 60).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      {show && <CardDetails tweets={tweets} />}
    </div>
  );
}

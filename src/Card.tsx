import { useState } from "react";
import CardDetails from "./CardDetails";
import { Bird } from "./data_pb";

export type CardProps = {
  bird: Bird
  twts: Date[]
}

export default function Card({ twts, bird }: CardProps) {
  const [show, setShow] = useState(false);
  const score = (b: Bird) => {
    return b.getNPositive() / (b.getNNegative() + 1)
  }

  const general = function(active: number, threshold: number) {
    return active > threshold
      ? "text-center text-xl text-green-500"
      : "text-center text-xl text-red-500";
  };

  return (
    <div>
      <div className="pt-2 pb-4 w-full flex flex-row border-b-1 gap-x-3 px-4">
        <div className="flex flex-row justify-center gap-x-4 items-center">
          <img alt="pfp" src={bird.getImgUrl()} className="w-16 h-16 rounded-full self-start"></img>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-y-1">
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
              <span className="ml-1 tweet-color text-xs">Sentiment score:</span>
              <span className={general(score(bird), 1)}>{score(bird).toFixed(2)}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 tweet-color text-xs">Positive tweets:</span>
              <span className="text-center text-xl">{bird.getNPositive()}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 tweet-color text-xs">Negative tweets:</span>
              <span className="text-center text-xl">{bird.getNNegative()}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 tweet-color text-xs">Total tweets:</span>
              <span className="text-center text-xl">{bird.getNPositive() + bird.getNNegative()}</span>
            </div>
            <div className="p-0.5 flex flex-col justify-between border-1 gap-x-0.5">
              <span className="ml-1 tweet-color text-xs">Tweets per minute</span>
              <span className="text-center text-xl">{(twts.length / 1000 * 60).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      {show && <CardDetails key={bird.getId()} bird_id={bird.getId()} show={show} />}
    </div>
  );
}

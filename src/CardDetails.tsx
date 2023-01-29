import { useEffect, useState } from "react";
import { DataClient } from "./DataServiceClientPb";
import { BirdRequest, Tweet } from "./data_pb";

export type CardDetailProps = {
  tweets: Tweet[];
};
export default function CardDetails({ tweets }: CardDetailProps) {
  return (
    <div
      className={
        "flex flex-col items-center w-full border-t-0 border-r-0 border-l-0 border-1"
      }
    >
      <div className="flex flex-col justify-center items-start w-full">
        {tweets.map((t: Tweet, i) => {
          // return <div key={i}>
          //   <div>{t.getAuthorName()}</div>
          //   <div>{t.getAuthorUsername()}</div>
          //   <div>{t.getBody()}</div>
          //   <div>{t.getScore()}</div>
          // </div>
          return (
            <div className="grid grid-cols-2 gap-3 pr-8 m-5">
              <div className="p-0.5 flex flex-col justify-between gap-x-0.5">
                <span className="text-xl">
                      <span className="font-bold">{t.getAuthorName()}</span>{ "@" + t.getAuthorUsername()}
                </span>
              </div>
              <div className="p-0.5 flex flex-col justify-between col-span-2 gap-x-0.5">
                <span className="text-lg">
                  {t.getBody()}
                </span>
              </div>
              <div className="p-0.5 flex flex-col justify-between gap-x-0.5">
                <span className="ml-1 text-xs tweet-color">Sentiment Score</span>
                <span className="text-xl">
                  {t.getScore()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

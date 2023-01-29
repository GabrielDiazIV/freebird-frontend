import { useEffect, useState } from "react";
import { DataClient } from "./DataServiceClientPb";
import { BirdRequest, Tweet, } from "./data_pb";

export type CardDetailProps = {
  show: boolean
  bird_id: number
}
export default function CardDetails({ bird_id, show }: CardDetailProps) {

  const [tweets, setTweets] = useState<Tweet[]>([]);
  useEffect(() => {
    const client = new DataClient("http://localhost:8080");

    const fetchBootstrap = async () => {
      const req = new BirdRequest()
      req.setId(bird_id)
      const _bird = await client.getBirdTweets(req, null);
      _bird.getTweetsList()
      setTweets(_bird.getTweetsList())
    }
    fetchBootstrap().catch(() => setTweets([]))

  }, [show, bird_id])
  return (
    <div className="w-full flex flex-col items-center border-1 border-t-0 border-l-0 border-r-0">
      <div className="lds-ellipsis">
        {
          tweets.map((t: Tweet) => {
            return <>
              <div>{t.getAuthorName()}</div>
              <div>{t.getAuthorUsername()}</div>
              <div>{t.getBody()}</div>
              <div>{t.getScore()}</div>
            </>
          })
        }
      </div>
    </div>
  );
}

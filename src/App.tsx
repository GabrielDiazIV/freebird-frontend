import "./App.css";
import { useEffect, useState } from "react";
import Leaderboard from "./Leaderboard";
import Card from "./Card";
import { DataClient } from "./DataServiceClientPb";
import { TweetStreamRequest } from "./data_pb"


function App() {
	const [toggle, setToggle] = useState(false);
	const [popping, setPopping] = useState(false);

	const getData = () => {
		const client = new DataClient("http://localhost:8080")
		const res = client.tweetStream(new TweetStreamRequest())
		// @ts-ignore
		res.on("data", x => console.log(x))
	}

	useEffect(() => {
		getData();
	}, [])

	const pop = () => {
		setPopping(true);
		setTimeout(() => setPopping(false), 500);
	};

	const buttonClass = function (active: boolean) {
		return active
			? "font-bold border-b-1 w-1/2 bg-white hover:bg-slate-100 bluesht transition-all duration-200"
			: "border-b-1 w-1/2 bg-white hover:bg-slate-100 bluesht-disabled transition-all";
	};

	const popSrc = () => {
		return !popping ? "/close.gif" : "/pop-cat.gif";
	};

	return (
		<div className="topo-bg w-full min-h-screen flex flex-col items-center ">
      {/* top level container 
      under create two subcontainers
      one has data and one has the buttons
      apply sticky to buttons and ur good */}
			<img className="w-20 h-20" src={popSrc()} />
			<p className="ml-4 font-bold text-5xl">FreeBird</p>
			<button onClick={(_) => pop()}>Test</button>
			<div className="bg-white mt-2 flex flex-col w-5/12 border-1 border-b-0 drop-shadow-lg">
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
				<div className="w-full">
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</div>
			</div>
		</div>
	);
}

export default App;

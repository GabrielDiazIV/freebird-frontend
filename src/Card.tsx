import { useState } from "react";
import CardDetails from "./CardDetails";

export default function Card() {
	const [show, setShow] = useState(false);

	const general = function (active: number, threshold: number) {
		return active > threshold
			? "text-center text-xl text-green-500"
			: "text-center text-xl text-red-500";
	};

	const num = 2;

	return (
		<div>
			<div className="pt-2 pb-4 w-full flex flex-row border-b-1 gap-x-3 px-4">
				<div className="flex flex-row justify-center gap-x-4 items-center">
					<div className="w-16 h-16 bg-black rounded-full self-start"></div>
				</div>
				<div className="flex flex-1 flex-col justify-between gap-y-1">
					<div className="flex flex-row justify-between">
						<p>
							<span className="font-bold">pobabobam</span> @iamobama
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
						<div className="p-2 flex flex-col justify-between border-1 gap-x-0.5">
							<span className="tweet-color text-xs">Sentiment score:</span>
							<span className={general(num, 0)}>{num}</span>
						</div>
						<div className="p-2 flex flex-col justify-between border-1 gap-x-0.5">
							<span className="tweet-color text-xs">Positive tweets:</span>
							<span className="text-center text-xl">123</span>
						</div>
						<div className="p-2 flex flex-col justify-between border-1 gap-x-0.5">
							<span className="tweet-color text-xs">Negative tweets:</span>
							<span className="text-center text-xl">123</span>
						</div>

						<div className="p-2 flex flex-col justify-between border-1 gap-x-0.5">
							<span className="tweet-color text-xs">Total tweets:</span>
							<span className="text-center text-xl">123</span>
						</div>
						<div className="p-2 flex flex-col justify-between border-1 gap-x-0.5">
							<span className="tweet-color text-xs">Tweet velocity:</span>
							<span className="text-center text-xl">123</span>
						</div>
					</div>
				</div>
			</div>
            { show && <CardDetails/>}
		</div>
	);
}

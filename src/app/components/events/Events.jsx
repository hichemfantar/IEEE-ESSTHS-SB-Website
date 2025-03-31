import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function EventSb({ chapter }) {
	if (chapter.length === 0) return null;

	const [expandedIndex, setExpandedIndex] = useState(null);
	const scrollRef = useRef(null);

	const sortedEvents = [...chapter]
		.filter((event) => event["Event Date"])
		.map((event) => ({ ...event, parsedDate: new Date(event["Event Date"]) }))
		.sort((a, b) => b.parsedDate - a.parsedDate);

	// Duplicate events for infinite scrolling effect
	const infiniteEvents = [...sortedEvents, ...sortedEvents];

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let scrollSpeed = 1; // Adjust scrolling speed
		const scroll = () => {
			if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
				scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2; // Smooth reset
			}
			scrollContainer.scrollLeft += scrollSpeed;
		};

		const interval = setInterval(scroll, 30);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{expandedIndex !== null && (
				<div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
					<div
						className="absolute inset-0"
						onClick={() => setExpandedIndex(null)}
					></div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
						className=" relative z-50 mx-4 flex w-full max-w-3xl items-center justify-center rounded-lg bg-white p-6 text-center shadow-xl dark:bg-gray-900"
					>
						<div
							className="background_events rounded"
							style={{
								backgroundImage: `url(${sortedEvents[expandedIndex]["Event_image"]})`,
							}}
						></div>
						<button
							onClick={() => setExpandedIndex(null)}
							className="absolute top-4 right-6 text-3xl font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
						>
							×
						</button>
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
							{sortedEvents[expandedIndex]["Event Title"]}
						</h2>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							{sortedEvents[expandedIndex].parsedDate.toDateString()}
						</p>
						<a
							href={sortedEvents[expandedIndex]["Event URL"]}
							target="_blank"
							rel="noreferrer"
							className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
						>
							View Event
						</a>
					</motion.div>
				</div>
			)}

			<div className="flex flex-col items-center py-10">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="mb-6 text-4xl font-bold"
				>
					Past Events
				</motion.div>

				<div
					ref={scrollRef}
					className="custom-scrollbar relative flex w-full space-x-6 overflow-x-auto scroll-smooth p-4"
				>
					{infiniteEvents.map((event, index) => (
						<motion.div
							key={`${event["Event Title"]}-${index}`}
							className=" flex min-w-[30rem]  flex-col items-center justify-center rounded-lg p-10 text-center shadow-lg transition-all ease-in-out dark:bg-gray-800 sm:h-64 sm:w-[250px] md:h-80 md:w-[500px]"
							// onClick={() => setExpandedIndex(index % sortedEvents.length)}
							// whileHover={{ scale: 1.05 }}
						>
							{/* <div className="text-lg font-semibold text-gray-900 dark:text-white">
								<p style={{ textWrap: "wrap" }}>{event["Event Title"]}</p>
							</div>
							<p className="text-gray-600 dark:text-gray-300">
								{event.parsedDate.toDateString()}
							</p>
							<a
								href={event["Event URL"]}
								target="_blank"
								rel="noreferrer"
								className="text-blue-500 underline transition hover:text-blue-700"
							>
								View Event
							</a> */}
							<div 	className="background_events h-60 w-full rounded bg-cover bg-center"	style={{ backgroundImage: `url(${event["Event_Image"]})` }} ></div>
						</motion.div>
					))}
				</div>

				<style jsx>{`
					.custom-scrollbar::-webkit-scrollbar {
						display: none;
					}
				`}</style>
			</div>
		</>
	);
}

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import "./UpComingEvents.css";

export function UpEvents({ chapter }) {
	if (chapter.length === 0) return null;

	const [expandedIndex, setExpandedIndex] = useState(null);
	const [selectedEvent, setSelectedEvent] = useState(null);

	// const scrollRight = () => {
	// 	if (scrollRef.current) {
	// 		scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
	// 		setCurrentIndex((prev) => (prev + 2) % sortedEvents.length);
	// 	}
	// };

	// useEffect(() => {
	//   const interval = setInterval(scrollRight, 3000);
	//   return () => clearInterval(interval);
	// }, []);
	if (chapter.length === 0) return null;

	const scrollRef = useRef(null);
	// const [currentIndex, setCurrentIndex] = useState(0);
	const [userInteracted, setUserInteracted] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const sortedEvents = [...chapter]
		.filter((event) => event["Event Date"])
		.map((event) => ({
			...event,
			parsedDate: new Date(event["Event Date"]),
		}))
		.sort((a, b) => b.parsedDate - a.parsedDate);

	// Clone last element at the beginning, and first element at the end
	const loopedEvents = [
		sortedEvents[sortedEvents.length - 1], // Clone last element at the beginning
		...sortedEvents,
		sortedEvents[0], // Clone the first element at the end
		sortedEvents[1],
	];

	// On mount, scroll to the real first item
	// useEffect(() => {
	//   if (scrollRef.current) {
	//     const cardWidth = scrollRef.current.children[1]?.getBoundingClientRect().width || 300;
	//     scrollRef.current.scrollTo({ left: cardWidth, behavior: "instant" });
	//     setCurrentIndex(1);
	//   }
	// }, []);

	// Auto-scroll logic
	// useEffect(() => {
	// 	if (userInteracted || isTransitioning) return;

	// 	const interval = setInterval(() => {
	// 		setCurrentIndex((prevIndex) => prevIndex + 1);
	// 	}, 3000);

	// 	return () => clearInterval(interval);
	// }, [currentIndex, userInteracted, isTransitioning]);

	// Handle infinite scrolling transition
	// useEffect(() => {
	//   if (!scrollRef.current) return;

	//   const card = scrollRef.current.children[currentIndex];
	//   if (!card) return;

	//   const cardWidth = card.getBoundingClientRect().width;
	//   const targetScroll = card.offsetLeft - (scrollRef.current.clientWidth / 2) + (cardWidth / 2);

	//   setIsTransitioning(true);
	//   scrollRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });

	//   // Reset scroll position when reaching the cloned elements
	//   if (currentIndex === loopedEvents.length - 1) {
	//     setTimeout(() => {
	//       scrollRef.current.scrollTo({ left: cardWidth, behavior: "instant" });
	//       setCurrentIndex(1);
	//       setIsTransitioning(false);
	//     }, 500);
	//   } else if (currentIndex === 0) {
	//     setTimeout(() => {
	//       scrollRef.current.scrollTo({ left: cardWidth * (loopedEvents.length - 2), behavior: "instant" });
	//       setCurrentIndex(loopedEvents.length - 2);
	//       setIsTransitioning(false);
	//     }, 500);
	//   } else {
	//     setIsTransitioning(false);
	//   }
	// }, [currentIndex, loopedEvents.length]);

	return (
		<>
			{selectedEvent && (
				<div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
					<div
						className="absolute inset-0"
						onClick={() => setSelectedEvent(null)}
					></div>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
						className="relative z-50 mx-4 w-full max-w-3xl rounded-lg bg-white p-6 text-center shadow-xl dark:bg-gray-900"
					>
						<button
							onClick={() => setSelectedEvent(null)}
							className="absolute top-4 right-6 text-3xl font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
						>
							×
						</button>
						<div className="flex flex-col items-center justify-between">
						<div className="flex flex-row justify-center">
								{" "}
								
								
								<div><div><img src={selectedEvent["Event_pdp"]} alt="" className="" /></div>	<h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
						
						{selectedEvent["Event Title"]}
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-300">
						{selectedEvent.parsedDate.toDateString()}-This activity is {selectedEvent.State}
					</p></div>
								
							</div>
							
					
								<div className="flex flex-row justify-evenly">
							
							<div className="flex flex-col justify-center">
							<div className="flex flex-row">
							<p>{selectedEvent["desrip"]}</p></div>	
							
								<a
									href={selectedEvent["Event_link"]}
									target="_blank"
									rel="noreferrer"
									className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 cursor-pointer"
								>
									View Event
								</a>
							</div>
								</div>
						
						</div>
					</motion.div>
				</div>
			)}

			<SmoothScrollEvents
				onExtend={setSelectedEvent}
				loopedEvents={loopedEvents}
			/>
		</>
	);
}

const SmoothScrollEvents = ({ loopedEvents, onExtend }) => {
	const scrollRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto-scroll every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % loopedEvents.length);
		}, 3000); // Adjust scroll speed

		return () => clearInterval(interval);
	}, [loopedEvents.length]);

	// Smooth scrolling & centering logic
	useEffect(() => {
		if (scrollRef.current) {
			const container = scrollRef.current;
			const selectedElement = container.children[1]; // Always scroll to the middle element

			if (selectedElement) {
				const containerCenter = container.offsetWidth / 2;
				const elementCenter =
					selectedElement.offsetLeft + selectedElement.offsetWidth / 2;

				container.scrollTo({
					left: elementCenter - containerCenter,
					behavior: "smooth",
				});
			}
		}
	}, [currentIndex]);

	// Function to get the current window of 3 events
	const getCurrentWindow = () => {
		const nextIndex = (currentIndex + 1) % loopedEvents.length;
		const prevIndex =
			(currentIndex - 1 + loopedEvents.length) % loopedEvents.length;

		return [
			loopedEvents[prevIndex], // Previous event
			loopedEvents[currentIndex], // Current event
			loopedEvents[nextIndex], // Next event
		];
	};

	return (
		<div className="flex w-full flex-col items-center py-10">
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="mb-6 text-4xl font-bold"
			>
				Latest Eventsdddd
			</motion.div>

			{/* Scrollable Container */}
			<div className="relative flex w-full justify-center overflow-hidden">
				<motion.div
					ref={scrollRef}
					className="custom-scrollbar flex w-full space-x-3 overflow-x-auto scroll-smooth p-3"
					style={{
						scrollSnapType: "x mandatory",
						scrollbarWidth: "none",
						display: "flex",
						justifyContent: "center",
						padding: "0 50px", // Add horizontal padding to prevent cutoff
					}}
				>
					{getCurrentWindow().map((event, index) => {
						const isActive = index === 1; // The middle item is the active one
						const scale = isActive ? 1 : 0.8;
						const opacity = isActive ? 1 : 0.4;

						return (
							<motion.div
								key={index}
								onClick={() => onExtend(event)}
								className="flex min-w-[30%] transform cursor-pointer  
                    flex-col items-center justify-center rounded-lg bg-white p-2 text-center shadow-lg transition-all dark:bg-gray-800 sm:min-w-[30%] md:min-w-[30%]"
								style={{
									scrollSnapAlign: "center",
									transform: `scale(${scale})`,
									opacity,
									transition:
										"transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
								}}
							>
								<div
									className="background_events h-60 w-full rounded bg-cover bg-center"
									style={{ backgroundImage: `url(${event["Event_image"]})` }}
								></div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									{event["Event Title"]}
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									{event.parsedDate?.toDateString()}-This activity is {event.State}
								</p>
								<a
								
									target="_blank"
									rel="noreferrer"
									className="text-blue-500 underline transition hover:text-blue-700 cursor-pointer"
								>
									View Event
								</a>
							</motion.div>
						);
					})}
				</motion.div>
			</div>

			<style jsx>{`
				.custom-scrollbar::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</div>
	);
};

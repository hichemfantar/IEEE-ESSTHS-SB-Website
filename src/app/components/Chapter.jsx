import { motion, AnimatePresence, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
export function Chapter({ chapter }) {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold ">Meet the team</div>

			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{chapter?.team?.map((speaker) => (
					// <Link
					// 	key={speaker.name}
					// 	to={speaker.name}
					// 	className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
					// >
					<div
						key={speaker.name}
						className=" col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
						style={{ border: `2px solid ${chapter.color}` }}
					>
						<img
							style={{
								objectPosition: "center top",
							}}
							src={speaker.imageSmall.url}
							alt=""
							className="mb-2 aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
							loading="lazy"
						/>
						<div className="text-center -mt-12">
						<div className="font-bold">{speaker.name}</div>
						{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
						<div className="text-sm">
							{speaker.title}
							{false && `, ${speaker.company.name}`}
						</div>
						</div>
					</div>
					// </Link>
				))}
			</div>
		</div>
	);
}

export function Events({ chapter }) {
	if (!chapter?.events || chapter.events.length === 0) {
	  console.log("No events found");
	  return null;
	}
  
	const scrollRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [expandedIndex, setExpandedIndex] = useState(null);
  
	const sortedEvents = [...chapter.events]
	  .filter((event) => event["Event Date"])
	  .map((event) => ({
		...event,
		parsedDate: new Date(event["Event Date"]),
	  }))
	  .sort((a, b) => b.parsedDate - a.parsedDate);
  
	const scrollLeft = () => {
	  if (scrollRef.current) {
		scrollRef.current.scrollBy({
		  left: -scrollRef.current.offsetWidth,
		  behavior: "smooth",
		});
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	  }
	};
  
	const scrollRight = () => {
	  if (scrollRef.current) {
		scrollRef.current.scrollBy({
		  left: scrollRef.current.offsetWidth,
		  behavior: "smooth",
		});
		setCurrentIndex((prev) => Math.min(prev + 1, sortedEvents.length - 1));
	  }
	};
  
	return (
	  <div className="relative flex flex-col items-center py-12">
		<motion.div
		  initial={{ opacity: 0, y: -50 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.8 }}
		  className="mb-6 text-4xl font-extrabold text-gray-800 dark:text-white"
		>
		  	Activities 
		</motion.div>
  
		<div className="relative flex w-full items-center justify-center">
	
  
		  <button
			onClick={scrollLeft}
			className="absolute left-4 z-10 rounded-full bg-white p-3 shadow-lg transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
		  >
			◀
		  </button>
  
		  <div
			ref={scrollRef}
			className="relative flex w-full justify-center space-x-6 overflow-x-auto scroll-smooth p-4 custom-scrollbar"
		  >
			{sortedEvents.map((event, index) => (
			  <motion.div
				key={event["Event Title"]}
				className="flex min-w-[30rem] cursor-pointer flex-col items-center justify-start gap-4 rounded-xl bg-white text-center shadow-lg transition-all ease-in-out hover:shadow-2xl dark:bg-gray-900 sm:h-64 sm:w-[250px] md:h-80 md:w-[500px]"
				onClick={() => setExpandedIndex(index)}
				whileHover={{ scale: 1.05 }}
			  >
				<div
				  className="background_events rounded"
				  style={{ backgroundImage: `url(${event["Event_image"]})` }}
				></div>
				<div className="flex flex-col items-center justify-center gap-4 text-center">
				  <div className="text-lg font-semibold text-gray-900 dark:text-white">
					<p className="break-words">{event["Event Title"]}</p>
				  </div>
				  <p className="mt-2 text-gray-600 dark:text-gray-400">
					{event.parsedDate.toDateString()}
				  </p>
				  <a
					href={event["Event URL"]}
					target="_blank"
					rel="noreferrer"
					className="mt-4 text-blue-500 underline transition hover:text-blue-700"
				  >
					View Event
				  </a>
				</div>
			  </motion.div>
			))}
		

		  </div>
  
		  <button
			onClick={scrollRight}
			className="absolute right-4 z-10 rounded-full bg-white p-3 shadow-lg transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
		  >
			▶
		  </button>
		  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-400 pointer-events-none backdrop-blur-sm"></div>
		  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-400 pointer-events-none backdrop-blur-sm"></div>
		</div>

		<style jsx>{`
		  .custom-scrollbar::-webkit-scrollbar {
			display: none;
		  }
		`}</style>
	  </div>
	);
  }
  
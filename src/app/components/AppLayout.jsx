import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { motion } from "framer-motion";
import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Chatbot from "../components/chatbot/chatbot";
import mosmos from "../../assets/mosmos.png";
import { twMerge } from "tailwind-merge";
import { images } from "../data/memories";
import React, { useEffect, Suspense, useRef, useState } from "react";

import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
} from "chart.js";


const pageVariants = {
	initial: {
		opacity: 0,
		y: 50, // Start from below
	},
	in: {
		opacity: 1,
		y: 0, // Slide to normal position
	},
	out: {
		opacity: 0,
		y: -50, // Slide upwards on exit
	},
};

const pageTransition = {
	type: "tween",
	ease: "linear",
	duration: 0.5, // Adjust duration for a slower scroll effect
};
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);


const imageRotations = [-12, 8, -6, 10, -10]; // Adjusted for a more natural hanging effect
const imagePositions = [
	"top-20 left-24",
	"top-24 left-48",
	"top-22 left-72",
	"top-28 left-96",
]; // Adjusted to place images cutely
function TeamBuildingMemories() {
	const [showTitle, setShowTitle] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowTitle(true);
		}, 3000);
	}, []);

	return (
		<div className="relative flex h-screen flex-col items-center justify-center ">
			{/* Animated Handwriting Title */}
			{showTitle && (
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="z-9 text-center text-8xl font-extrabold text-blue-700"
				>
					<motion.h1
						initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
						animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="inline-block"
					>
						IEEE ESSTHS
					</motion.h1>
				</motion.h1>
			)}

			{/* Blurry Images Behind the Title */}
			<div className="absolute top-24 z-0 flex flex-wrap justify-center space-x-6 space-y-10">
				{images.map((src, index) => (
					<motion.div
						key={index}
						className="flex flex-col items-center"
						initial={{ opacity: 0, scale: 1.2, rotate: imageRotations[index] }}
						animate={{
							opacity: showTitle ? 0.3 : 1,
							scale: 0.8,
							rotate: imageRotations[index],
							filter: showTitle ? "blur(6px)" : "none",
						}}
						transition={{ duration: 1.5, delay: index * 0.4 }}
					>
						<img
							src={src}
							className="h-auto w-64 rounded-lg shadow-lg"
							alt={`Memory ${index + 1}`}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
export default function AppLayout({ children }) {
	const { pathname } = useLocation();
	const [showMemories, setShowMemories] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
		  setShowMemories(false);
		}, 7000); // Show for 3 seconds
	
		return () => clearTimeout(timer); // Cleanup the timer on unmount
	  }, []);
	return (
		<>
			{/* Chatbot with animation */}
			{/* <motion.div
				initial="initial"
				animate="in"
				variants={pageVariants}
				transition={pageTransition}
			>
				<Chatbot />
			</motion.div> */}
{showMemories ?(<TeamBuildingMemories/>):(<div>
<div>
				<Navigation />

				<main>
					{/* Animated page content */}

					{children}
					<Outlet />
				</main>

				<Footer />
			</div>

			<Link to="https://www.facebook.com/essthsieee" target="_blank">
				<img
					src={mosmos}
					className={twMerge(
						"fixed top-20 z-10 h-24 rotate-45 object-contain transition hover:scale-110 md:right-0 md:top-auto md:bottom-24 md:-rotate-45"
					)}
					alt="mosmos mascot"
				/>
			</Link>
			<ScrollRestoration />
			
			<ReactQueryDevtools initialIsOpen={false} />
</div>)
		}	
		</>
	);
}

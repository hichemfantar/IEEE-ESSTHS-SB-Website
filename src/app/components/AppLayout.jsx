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




ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);


function TeamBuildingMemories() {
	const [imageRotations, setImageRotations] = useState([]);

useEffect(() => {
  setImageRotations(images.map(() => Math.random() * 20 - 10)); //NOSONAR
}, []);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 3000);
  }, []);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      {showTitle && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="z-10 text-center text-8xl font-extrabold text-blue-700"
        >
          <motion.span
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block"
          >
          Welcome to IEEE essths student
          </motion.span>
        </motion.h1>
      )}

      <div className="absolute top-24 z-0 flex flex-wrap justify-center gap-2"> {/* Horizontal flex layout */}
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 1.2, rotate: imageRotations[index] }}
            animate={{
              opacity: showTitle ? 0.3 : 1,
              scale: 1.1,
              rotate: imageRotations[index],
              filter: showTitle ? "blur(6px)" : "none",
            }}
            transition={{ duration: 1.5, delay: (index % images.length) * 0.1 }}
          >
            <img
              src={src}
              className="h-auto w-64 rounded-lg shadow-lg" /* Increased size */
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

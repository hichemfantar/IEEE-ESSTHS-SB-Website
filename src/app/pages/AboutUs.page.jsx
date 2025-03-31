import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../../assets/main logo black (Custom).png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";
import { SparrowSurvey } from "./Home.page";
import { AwardsMap } from "../components/awardsmap/Awardmap";
import { awardsData } from "../data/awards";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {  useNavigate, useParams } from "react-router-dom";

import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const images = [
	"/assets/teambuilding/1.jpg",
	"/assets/teambuilding/2.jpg",
	"/assets/teambuilding/3.jpg",
	"/assets/teambuilding/5.jpg",
	"/assets/teambuilding/4.jpg",
	"/assets/teambuilding/6.jpg",
];
const imageRotations = [-12, 8, -6, 10, -10]; // Adjusted for a more natural hanging effect
const imagePositions = [
	"top-20 left-24",
	"top-24 left-48",
	"top-22 left-72",
	"top-28 left-96",
]; // Adjusted to place images cutely


export default function AwardsMapPage() {
	
				const { chapterSlug } = useParams();
				useEffect(() => {
					const faviconMap = {
						"/": "/favicon-32x32.png",
				"/cs": "/csicons.png",
				"/wie": "/wie_icons.png",
				"/aess": "/aessold.png",
				"/ras": "/icons/wie.png",
				"/iip": "/icons/wie.png",
				"/sight": "/icons/wie.png",
					  };
					console.log('chapterSlug',chapterSlug)
			
					const favicon = document.querySelector("link[rel='icon']");
					if (favicon) {
					  favicon.href = faviconMap[chapterSlug] || "/favicon-32x32.png"; // Default favicon
					}
				  }, [chapterSlug]);
	return (
		<div>
			<div className="py-14">
				<div className="col-span-12 mx-5 px-8 py-16">
					<div className="px-16">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							About IEEE ESSTHS Student Branch.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							IEEE ESSTHS Student Branch, founded in 2020, is home to more than
							280 members, making it the largest Student Branch in Sousse, and
							7th in Tunisia Section. It encompasses 5 Technical Chapters: AESS,
							CS, IAS, PES, RAS, IES, and 2 Affinity Groups: SIGHT & WIE. We
							have had the honor of receiving more than 12 worldwide IEEE Awards
							across all fields through the dedication and commitment of each of
							our members.
							<br />
							Our mission is to empower Tunisian students with practical
							technical skills and real-world experience through collaborative
							open-source projects and humanitarian technology initiatives.
						</h1>
						<div>
							<Link
								// type="button"
								to={"https://www.facebook.com/essthsieee/"}
								target="_blank"
								rel="noreferrer"
								className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
							>
								{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
								<span className="">Learn more about ESSTHS</span>
								{/* </div> */}
							</Link>
						</div>
					</div>
				</div>
			</div>

			<AwardsMap awards={awardsData} />
		</div>
	);
}

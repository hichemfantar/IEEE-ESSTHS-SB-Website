import React, { useEffect, Suspense, useRef, useState } from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LogoOnBlack from "../../assets/Logo on black.png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SBGroupPic from "../../assets/sb-group-pic.jpg";
import TSYP2014 from "../../assets/tsyp-editions/tsyp-2014.jpg";
import TSYP2016 from "../../assets/tsyp-editions/tsyp-2016.jpg";
import TSYP2017 from "../../assets/tsyp-editions/tsyp-2017.jpg";
import TSYP2018 from "../../assets/tsyp-editions/tsyp-2018.png";
import TSYP2019 from "../../assets/tsyp-editions/tsyp-2019.jpg";
import TSYP2020 from "../../assets/tsyp-editions/tsyp-2020.jpg";
import TSYP2021 from "../../assets/tsyp-editions/tsyp-2021.jpg";
import mosmosetImage from "../../assets/ieee-essths/mosmoset.png";
import IeeeTunisia from "../../assets/ieee-tunisia.png";
import YpTunisia from "../../assets/yp-tunisia-section.png";
import essthsLogo from "../../assets/essths.png";
import IEEER8 from "../../assets/IEEE R8.svg";
import R8_SAC from "../../assets/R8_SAC.png";
import aess from "../../assets/aess.png";
import iesLogo from "../../assets/ies.png";
import IASLogo from "../../assets/ias-logo-shadowbg.png";
import TSYP2021Dark from "../../assets/tsyp-editions/tsyp-2021-dark.png";
import TSYP2022 from "../../assets/tsyp-editions/tsyp-2022.png";
import { Link } from "react-router-dom";
import ExCom from "../components/ExCom";
import ThreeExperience from "../components/ThreeExperience";
import { ScheduleOverview } from "../components/schedule/ScheduleList";
import Speakers from "../components/Speakers";
import { useMediaQuery } from "usehooks-ts";
import Chairs from "../components/Chairs";
import MultimediaDepartment from "../components/MultimediaDepartment";
import BusinessDepartment from "../components/BusinessDepartment";
import HrDepartment from "../components/HrDepartment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { EventSb } from "../components/events/Events";
import { UpEvents } from "../components/events/UpComingEvents";
import { images } from "../data/memories";
import { motion } from "framer-motion";
import { events } from "../data/events";
import { upevents } from "../data/upcomingevents";
import {  useParams } from "react-router-dom";
import "./Homepage.css"




import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
} from "chart.js";

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
						transition={{ duration: 2, ease: "easeInOut" }}
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

export default function HomePage() {

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
	const AnimatedCounter = ({ value, duration = 2000 }) => {
		const [count, setCount] = useState(0);
		const [highlight, setHighlight] = useState(false);

		useEffect(() => {
			let start = null;
			const step = (timestamp) => {
				if (!start) start = timestamp;
				const progress = timestamp - start;
				const progressRatio = Math.min(progress / duration, 1);
				const currentValue = Math.floor(progressRatio * value);
				setCount(currentValue);
				if (progress < duration) {
					requestAnimationFrame(step);
				} else {
					setCount(value);
					// Trigger the highlight for a smooth font size transition
					setHighlight(true);
					setTimeout(() => {
						setHighlight(false);
					}, 1000);
				}
			};

			requestAnimationFrame(step);
		}, [value, duration]);

		return (
			<span className={` ${highlight ? " animate-gradient highlight" : ""}`}>
				{count}
			</span>
		);
	};
	const ScrollReveal = ({ children }) => {
		const ref = useRef(null);

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("fade-in");
						} else {
							entry.target.classList.remove("fade-in");
						}
					});
				},
				{ threshold: 0.3 } // adjust threshold as needed
			);

			if (ref.current) {
				observer.observe(ref.current);
			}

			return () => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			};
		}, []);

		return (
			<div
				ref={ref}
				className="opacity-0 translate-y-5 transition-all duration-700 ease-in-out"
			>
				{children}
			</div>
		);
	};
	const matches = useMediaQuery("(min-width: 768px)");
	const sectionVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<>
		
			<div className="h-full ">

{false && matches && (
	<Suspense fallback={null}>
		<div className="hidden h-[40rem] overflow-auto rounded-2xl md:block md:h-[45rem]">
			<ThreeExperience />
		</div>
	</Suspense>
)}
<header className="background flex flex-col justify-center align-center items-center h-[40rem] sm:h-[30rem] xl:h-[43rem] md:h-[40rem]">
<div className="background flex flex-col justify-center align-center items-center h-[10rem] sm:h-[10rem] " >


</div>
		<div className="">
			<h1 className="animated-title mb-8 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
				<span className="gradient-text">IEEE ESSTHS</span>{" "}
				Student Branch
			</h1>

			{/* <img
			src={mosmosetImage}
			className="mx-auto mb-2 h-56 object-contain drop-shadow-lg sm:h-52"
			alt="TSYP 11"
			loading="lazy"
		/> */}
			<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
				Hammam Sousse, Tunisia, since 2021
			</h1>
		
		</div>


		<div className="w-[20%] ">
			<img src="https://res.cloudinary.com/dytybjqwb/image/upload/v1738224012/logowhite_fgcekh.png" />

			</div>

	</header>
			
	<div className="col-span-12 flex flex-wrap items-center justify-evenly gap-8 md:gap-12 border-red-500 p-8 rounded-3xl">
		{[{ title: "Members", value: "300" }, { title: "Events", value: "200" }, { title: "Awards", value: "15" }, { title: "Partners", value: "5" }, { title: "Officers", value: "40" }]
			.map((e) => (
				<ScrollReveal key={e.title}>
					<div className="flex flex-col gap-2 justify-center">
						<h1 className="text-center text-xl font-bold tracking-tight lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							<AnimatedCounter value={e.value} duration={2000} />
						</h1>
						<h1 className="text-center text-xl font-bold tracking-tight lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							{e.title}
						</h1>
					</div>
				</ScrollReveal>
			))}
	</div>
	
<ScrollReveal >

	{false && (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto">
				<img
					src={LogoOnBlack || Logo}
					className={`mx-auto mb-8 hidden h-52 object-contain dark:block ${LogoOnBlack ? "" : "dark:invert"
						} sm:h-48`}
					alt="TSYP 11"
					loading="lazy"
				/>

				<img
					src={LightLogo}
					className="mx-auto h-56 object-contain dark:hidden sm:h-60"
					alt="TSYP 11"
					loading="lazy"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE TSYP Congress.
				</h1>
				<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					Tunisian Students and Young Professionals, is the annual congress
					that brings together IEEE members in Tunisia. We are talking about
					the 11th edition which is organized by IEEE ESSTHS SB. It is an
					excellent opportunity to discuss current and future challenges in
					science and engineering, to immerse in the IEEE national network
					and to exchange experiences.
				</h1>
			</div>
		</section>
	)}

	{false && (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<ScrollReveal >
				<div className="col-span-6 mx-auto md:order-last">

					<img
						src={IeeeTunisia}
						className="mx-auto h-52 object-contain sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						About IEEE Tunisia Section.
					</h1>
					<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The IEEE Tunisian Section aims to disseminate IEEE activities to
						all corners of the country through educational and technical
						activities, networking of people, and developing technology and
						its applications for humanitarian challenges. The section supports
						chapters, special interest groups, student activities, and student
						awards. IEEE is anchored in the Tunisian engineering landscape
						with more than 43 Student Branches' spread over the different
						engineering schools, faculties and universities
					</h1>
					<div>
						<Link
							// type="button"
							to={"https://ieee.tn/"}
							target="_blank"
							rel="noreferrer"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Learn more IEEE Tunisia Section</span>
							{/* </div> */}
						</Link>
					</div>
				</div>
			</ScrollReveal>
		</section>

	)}

	

	<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 xflex container mx-auto flex-1 p-4 py-8 2xl:px-24">

		
		{/* <div className="col-span-6 mx-auto">
			<img
				src={SBGroupPic}
				className="mx-auto h-56 rounded-2xl object-cover sm:h-96"
				alt="TSYP 11"
				loading="lazy"
			/>
		</div> */}
		<div className="col-span-12">
			<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
				About IEEE ESSTHS Student Branch.
			</h1>
			<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
				IEEE ESSTHS Student Branch, founded in 2020, is home to more than
				280 members, making it the largest Student Branch in Sousse, and 7th
				in Tunisia Section. It encompasses 5 Technical Chapters: AESS, CS,
				IAS, PES, RAS, IES, and 2 Affinity Groups: SIGHT & WIE. We have had
				the honor of receiving more than 12 worldwide IEEE Awards across all
				fields through the dedication and commitment of each of our members.
				<br />
				Our mission is to empower Tunisian students with practical technical
				skills and real-world experience through collaborative open-source
				projects and humanitarian technology initiatives.
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

	</section>
</ScrollReveal>

<ScrollReveal>			<div className="col-span-12 mx-auto">
			{/* <h1 className="mb-8 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
				<span className="text-[#ffffff] dark:text-[#2d3d85]">IEEE</span>{" "}
				ESSTHS Student Branch
			</h1> */}

			<img
				src={mosmosetImage}
				className="mx-auto mb-2 h-56 object-contain drop-shadow-lg sm:h-52"
				alt="TSYP 11"
				loading="lazy"
			/>
			{/* <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
				Hammam Sousse, Tunisia, since 2021
			</h1> */}
		</div>
	

		
		
		</ScrollReveal>
		<section>
		<UpEvents chapter={upevents}/>
	</section>
<ScrollReveal >


	<section >
		<Chapters />
	</section></ScrollReveal>

<ScrollReveal >
	<section >
		<PoweredBy />
	</section>
</ScrollReveal>

{false && (
	<section className="py-8 md:py-20">
		<IEEEPartners />
	</section>
)}

{false && (
	<section className="py-8 md:py-20">
		<Speakers />
	</section>
)}

{/* <div className="hidden md:block">
	<ScheduleOverview />
</div> */}
<ScrollReveal >
	<section>
		<ExCom />
	</section>
</ScrollReveal>
<ScrollReveal >

	<section >
		<Chairs />
	</section>
</ScrollReveal>
<section>
		<EventSb chapter={events}/>
	</section>

<section className="py-8 md:py-12 xflex container mx-auto flex-1 p-4 py-8 2xl:px-24">
	<div className="mx-auto">
		<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
			Find us here.
		</h1>
		<iframe
			title="tsyp location"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12935.840417133557!2d10.5974361!3d35.8499818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a6826eca57b%3A0xf698bd059d8e2d13!2s%C3%89cole%20sup%C3%A9rieure%20des%20sciences%20et%20de%20la%20technologie%20de%20Hammam%20Sousse!5e0!3m2!1sen!2stn!4v1688595702507!5m2!1sen!2stn"
			className="w-full rounded-2xl shadow-md"
			height="500"
			style={{
				border: 0,
				// width: "100%",
			}}
			allowFullScreen=""
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</section>
{/* <SparrowSurvey /> */}
</div>
		</>
		
	);
}



export function Chapters({ title = "Our Chapters & Affinity Groups" }) {
	const chapters = [
	  { name: "RAS", link: "/chapters/ras", img: "/assets/ras.png", bg: "bg-[#740f0f]", bgcard: "#E8CDCC", background: "#740f0f" ,momos:'https://res.cloudinary.com/dytybjqwb/image/upload/v1741520286/momos_ras_feli4g.png'},
	  { name: "CS", link: "/chapters/cs", img: "/assets/cs.png", bg: "bg-[#c65503]", bgcard: "#ECCDB4", background:"#E8CDCC" ,momos:'https://res.cloudinary.com/dytybjqwb/image/upload/v1741520289/momos_cs_usy4ml.png'},
	  { name: "AESS", link: "/chapters/aess", img: "/assets/aess.png", bg: "bg-[#d9e2e5]", bgcard: "#d9e2e5", background: "#d9e2e5",momos:'https://res.cloudinary.com/dytybjqwb/image/upload/v1741520285/momos_aess_fx0cvm.png' },
	  { name: "SIGHT", link: "/chapters/sight", img: "/assets/sight.png", bg: "bg-[#a14706]", bgcard: "#EFCDB2", background: "#c65503" ,momos:'https://res.cloudinary.com/dytybjqwb/image/upload/v1741520220/momos_sight_yobxu2.png'},
	  { name: "WIE", link: "/chapters/wie", img: "/assets/wie.png", bg: "bg-[#4c1064]", bgcard: "#DBCCE1", background: "#4c1064",momos:'https://res.cloudinary.com/dytybjqwb/image/upload/v1741520256/momos_wied_chzjta.png' },
	  { name: "IIP", link: "/chapters/iip", img: "/assets/iip.png", bg: "bg-[#fff]", bgcard :"#B3DFC6", background: "#0e5b30" ,momos:'https://res.cloudinary.com/dytybjqwb/image/upload/v1741520781/momos_iip_r10xwj.png'},
	];
  
	return (
	  <div className="py-16">
		<h2 className="text-center text-4xl font-bold mb-10">{title}</h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
		  {chapters.map((chapter, index) => (
			<Link key={index} to={chapter.link}>
			  <div
				className={`relative flex flex-col items-center p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 hover:bg-opacity-80 transform hover:translate-z-10`}
				style={{
				  background: "rgba(255, 255, 255, 0.3)" ,
				  backdropFilter: "blur(10px)",
				  border:`1px solid ${chapter.bgcard}`,
				  transition: "background-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
				  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", // Add depth to the card
				  perspective: "1000px", // 3D effect for the card container
				}}
			  >
				<img
				  src={chapter.img}
				  alt={chapter.name}
				  className="h-36 w-64 rounded-xl object-contain transition-transform duration-300"
				/>
				<div
				  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 hover:opacity-80 `}
				/>
			  </div>
			</Link>
		  ))}
		</div>
	  </div>
	);
  }
  
  

function PreviousEditions() {
	return (
		<div className="hadow-xl rounded-2xl py-24 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					Previous Editions
				</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2022/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2022}
								alt="TSYP2022"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2022</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2021/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2021Dark}
								alt="TSYP2021Dark"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2021</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2020/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-cover shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2020}
								alt="TSYP2020"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2020</h1>
					</div>

					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2019/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2019}
								alt="TSYP2019"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2019</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2018/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain p-4 shadow-md shadow-gray-200 transition dark:invert sm:col-start-2 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2018}
								alt="TSYP2018"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2018</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2017/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2017}
								alt="TSYP2017"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2017</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2016/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2016}
								alt="TSYP2016"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2016</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2015/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={IeeeTunisia}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2015</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2014/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-900 invert transition dark:invert-0 sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2014}
								alt="TSYP2014"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2014</h1>
					</div>
					<div className="transition hover:scale-105">
						<a href="#">
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={IeeeTunisia}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2013</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

function PoweredBy() {
	return (
		<div className="hadow-xl  rounded-2xl">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">Our Partners</h2>
				<div className=" mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{/* <a
						href="https://www.satoripop.com/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/satoripop.png"}
							alt="satoripop"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a> */}
					{/* <a
						href="https://2btrading.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/2b.jpg"}
							alt="2betrading"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a> */}
					<a
						href="https://gomycode.com/"
						target="_blank"
						rel="noreferrer"
						className="bg-white overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/gmc.png"}
							alt="gomycode"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					{/* <a
						href="https://www.pristiniaiuniversity.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/pristini.png"}
							alt="pristini"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a> */}
					<a
						href="http://www.essths.rnu.tn/public/"
						target="_blank"
						rel="noreferrer"
						className="bg-white overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/essths.png"}
							alt="essths"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://www.linkedin.com/company/rockets-space/"
						target="_blank"
						rel="noreferrer"
						className="bg-white overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/rockets_space_logo.jpg"}
							alt="essths"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

function IEEEPartners() {
	return (
		<div className="hadow-xl rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">IEEE Partners</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<a
						href="https://ieeer8.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={IEEER8}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://ieeer8.org/student-activities/sa-committee/sac/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] rounded-full object-contain shadow-md shadow-gray-200 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={R8_SAC}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://ieee-aess.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={aess}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://ias.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={IASLogo}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}


export function SparrowSurvey() {
	useEffect(() => {
		window.sparrowLaunch({
			/*add custom params here*/
		});

		return () => { };
	}, []);

	return (
		<div
			id="ss_survey_widget"
			className="h-[800px]!important mx-auto"
			style={{
				position: "relative",
				width: "100% !important",
				height: "1000px !important",
			}}
		></div>
	);
}

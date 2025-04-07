import { useNavigate, useParams } from "react-router-dom";

import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chapter, Events } from "../components/Chapter";

export default function ChapterPage() {
	const { chapterSlug } = useParams();
	const navigate = useNavigate();
	const currentChapter = chapters.find((s) => s.slug === chapterSlug);

	if (!currentChapter) {
		return navigate("/");
	}

	return (
		<div>
			<div className="mb-12 flex items-center justify-center gap-3">
				<FontAwesomeIcon icon={faExternalLink} className="text-xl" />
				<h2 className="text-center text-4xl font-bold">
					{currentChapter.name}
				</h2>
			</div>
			<Chapter chapter={currentChapter} />
			<div className="h-10"></div>
			<Events chapter={currentChapter} />
		</div>
	);
}

export const chapters = [
	{
		name: "Computer Society (CS)",
		slug: "cs",
		team: [
			{
				name: "Ahmed Jguirim",
				title: "Chair",
				imageSmall: {
					url: "/assets/people/Ahmed Jguirim - CS Chair.jpg",
				},
			},
			{
				name: "Ahmed Kahloun",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Ahmed Kahloun - Vice Chair.jpg",
				},
			},
			{
				name: "Elaa ben Othmen",
				title: "Webmaster",
				imageSmall: {
					url: "/assets/people/Elaa ben Othmen - Webmaster.jpg",
				},
			},
			{
				name: "Fourat Idani",
				title: "Treasurer",
				imageSmall: {
					url: "/assets/people/Fourat Idani - Treasurer.jpg",
				},
			},
			{
				name: "Rayhan Souai",
				title: "General Secretary",
				imageSmall: {
					url: "/assets/people/Rayhan Souai - SG.jpeg",
				},
			},
		],
		events: [
			{
				"Event Title":
					"Xtreme Training Session: Mastering Competitive Programming 101",
				"Event Date": "17 Oct 2023 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/387753",
			},
			{
				"Event Title":
					"Fluttering Forward: Empowering Women In Engineering Through App Development",
				"Event Date": "25 Apr 2023 8:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362385",
			},
			{
				"Event Title": "Participation  in IEEE Region 8 Industrial Bootcamp",
				"Event Date": "15 Apr 2023 12:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/387837",
			},
			{
				"Event Title": "Participation in Code to Cure 1.0",
				"Event Date": "14 Apr 2023 12:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/387836",
			},
			{
				"Event Title":
					"Mastering the back-end: from the basics to advanced techniques",
				"Event Date": "02 Apr 2023 9:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362463",
			},
			{
				"Event Title": "Game On : in collaboration with ENSIT SB",
				"Event Date": "29 Nov 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334389",
			},
			{
				"Event Title":
					"Meeting with Farah Lajimi chair CS Chapter ENSIT : Collab CS Chapter ESSTHS X CS Chapter ENSIT",
				"Event Date": "14 Nov 2022 4:08 PM",
				"Event URL": "https://events.vtools.ieee.org/m/333517",
			},
			{
				"Event Title":
					"Meeting with the administration of Lycée des non-voyants",
				"Event Date": "26 Oct 2022 2:19 PM",
				"Event URL": "https://events.vtools.ieee.org/m/331539",
			},
			{
				"Event Title":
					"COMP.CPP : Competitive programming training sessions in collaboration with SMU and ISIMA Part 5",
				"Event Date": "20 Oct 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334960",
			},
			{
				"Event Title": "Comp.CPP 5.0 with IEEE ESSTHS CS & IEEE ISIMa CS",
				"Event Date": "20 Oct 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337209",
			},
			{
				"Event Title": "Code Runner 1.0",
				"Event Date": "16 Oct 2022 1:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334969",
			},
			{
				"Event Title":
					"COMP.CPP : Competitive programming training sessions in collaboration with SMU and ISIMA Part 4",
				"Event Date": "14 Oct 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334958",
			},
			{
				"Event Title": "Comp.CPP 4.0 with IEEE ESSTHS CS & IEEE ISIMa CS",
				"Event Date": "14 Oct 2022 8:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337208",
			},
			{
				"Event Title":
					"COMP.CPP : Competitive programming training sessions in collaboration with SMU and ISIMA Part 3",
				"Event Date": "06 Oct 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334955",
			},
			{
				"Event Title": "Comp.CPP 3.0 with IEEE ESSTHS CS & IEEE ISIMa CS",
				"Event Date": "06 Oct 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337206",
			},
			{
				"Event Title":
					"COMP.CPP : Competitive programming training sessions in collaboration with SMU and ISIMA Part 2",
				"Event Date": "29 Sep 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334954",
			},
			{
				"Event Title": "Comp.CPP 2.0 with IEEE ESSTHS CS & IEEE ISIMa CS",
				"Event Date": "29 Sep 2022 8:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337205",
			},
			{
				"Event Title":
					"COMP.CPP : Competitive programming training sessions in collaboration with SMU and ISIMA Part 1",
				"Event Date": "22 Sep 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334937",
			},
			{
				"Event Title": "Comp.CPP 1.0 with IEEE ESSTHS CS & IEEE ISIMa CS",
				"Event Date": "22 Sep 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337203",
			},
			{
				"Event Title": "Collab meeting : ESSTHS SB X ISIMA SB X SMU SB",
				"Event Date": "19 Sep 2022 9:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/331550",
			},
			{
				"Event Title": "Computer Society Team building on the 6th of August",
				"Event Date": "06 Aug 2022 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/323399",
			},
			{
				"Event Title": "React Training Sessions",
				"Event Date": "11 Jul 2022 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/333527",
			},
			{
				"Event Title": "COMP.CPP first session",
				"Event Date": "04 Jul 2022 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/319388",
			},
			{
				"Event Title":
					"Ramadan Tech Talks 2nd Session : Introduction To Web Development",
				"Event Date": "12 Apr 2022 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/312499",
			},
			{
				"Event Title": "Code Of War",
				"Event Date": "17 Mar 2022 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/317736",
			},
			{
				"Event Title": "Intro to Graphic Design Workshop",
				"Event Date": "01 Mar 2022 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/323096",
			},
			{
				"Event Title": "Let's Learn Flutter Last Training session",
				"Event Date": "28 Nov 2021 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/292147",
			},
			{
				"Event Title": "Flutter training sessions",
				"Event Date": "13 Nov 2021 8:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/293667",
			},
			{
				"Event Title": "Let's Learn Flutter",
				"Event Date": "06 Nov 2021 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/292139",
			},
			{
				"Event Title": "Flutter Booth",
				"Event Date": "04 Nov 2021 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/292213",
			},
			{
				"Event Title": "IEEEXTREME 15.0",
				"Event Date": "22 Oct 2021 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/292254",
			},
			{
				"Event Title": "Advanced IEEEXtreme Training Sessions",
				"Event Date": "10 Oct 2021 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/291918",
			},
			{
				"Event Title": "C Language Programming Training Session",
				"Event Date": "20 Aug 2021 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/292185",
			},
			{
				"Event Title": "Python workshop",
				"Event Date": "23 Jul 2021 6:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/279545",
			},
			{
				"Event Title": "JavaScript Workshop",
				"Event Date": "08 Jul 2021 5:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/277311",
			},
			{
				"Event Title": "Python workshop",
				"Event Date": "19 May 2021 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/275282",
			},
			{
				"Event Title": "Python Bootcamp, IOT & Digital Marketing",
				"Event Date": "04 May 2021 9:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/275280",
			},
			{
				"Event Title": "Web Development",
				"Event Date": "03 Apr 2021 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/275283",
			},
			{
				"Event Title": "Python Tutorial",
				"Event Date": "28 Mar 2021 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/276803",
			},
		],
	},
	{
		name: "Robotics & Automation Society (RAS)",
		slug: "ras",
		team: [
			{
				name: "Aziz Knaz",
				title: "Chair",
				imageSmall: {
					url: "/assets/people/Aziz Knaz - Chair.jpg",
				},
			},
			{
				name: "Khalil Hagui",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Khalil Hagui - Vice chair.JPG",
				},
			},
			{
				name: "Aziz Slama",
				title: "Fablab Manager",
				imageSmall: {
					url: "/assets/people/Aziz Slama - Fablab.jpg",
				},
			},
			{
				name: "Ahmed Kilani",
				title: "Webmaster",
				imageSmall: {
					url: "/assets/people/Ahmed Kilani - Webmaster.jpg",
				},
			},
			{
				name: "Mariem ElMabrouk",
				title: "Treasurer",
				imageSmall: {
					url: "/assets/people/Mariem ElMabrouk - Treasurer.JPG",
				},
			},
			{
				name: "Chaima Ayed",
				title: "General Secretary",
				imageSmall: {
					url: "/assets/people/chaima_ayed_-_General_secretary_RAS_chapter.jpg",
				},
			},
		],
		events: [
			{
				"Event Title": "Robot's League 1.0",
				"Event Date": "19 Nov 2023 8:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/384199",
			},
			{
				"Event Title": "c++ workshop session for embedded systems",
				"Event Date": "15 Jul 2023 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/375978",
			},
			{
				"Event Title": "SolidWorks speed modeling challenge 1.0",
				"Event Date": "29 Apr 2023 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/379082",
			},
			{
				"Event Title": "SolidWorks training",
				"Event Date": "19 Apr 2023 3:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/379104",
			},
			{
				"Event Title": "ROBONERDS 3.0",
				"Event Date": "17 Apr 2023 1:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337692",
			},
			{
				"Event Title": "Participation in Robothack'23",
				"Event Date": "16 Apr 2023 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/359229",
			},
			{
				"Event Title": "Raspberry Pi workshop",
				"Event Date": "13 Apr 2023 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337697",
			},
			{
				"Event Title": "Solidworks Workshop",
				"Event Date": "12 Mar 2023 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337699",
			},
			{
				"Event Title": "PARTICIPATION IN FSM ROBOTS 2.0",
				"Event Date": "05 Feb 2023 7:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/351250",
			},
			{
				"Event Title": "Participation in ENISROBOT",
				"Event Date": "27 Nov 2022 8:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337180",
			},
			{
				"Event Title": "ROBONERDS 2.0",
				"Event Date": "19 Nov 2022 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334922",
			},
			{
				"Event Title": "Zarzis Scouts: Introduction to Arduino",
				"Event Date": "19 Jul 2022 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/325849",
			},
			{
				"Event Title": "Kid's paradise Hackathon",
				"Event Date": "10 Jun 2022 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/317235",
			},
			{
				"Event Title": "MARIE CURIE COMPETITION",
				"Event Date": "11 May 2022 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337168",
			},
			{
				"Event Title": "ROBONERDS 1.0",
				"Event Date": "07 May 2022 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/313195",
			},
			{
				"Event Title": "Participation in ENISO Smart Challenge",
				"Event Date": "24 Apr 2022 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/321320",
			},
			{
				"Event Title": "Participation in  IHEC Enactus",
				"Event Date": "13 Apr 2022 3:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337194",
			},
			{
				"Event Title": "Kid's Paradise Arduino Workshop",
				"Event Date": "06 Apr 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311474",
			},
			{
				"Event Title": "Kid's Paradise Scratch Workshop",
				"Event Date": "05 Apr 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311475",
			},
			{
				"Event Title": "MARIE CURIE ARDUINO WORKSHOPS",
				"Event Date": "01 Mar 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337170",
			},
			{
				"Event Title": "Kid's Paradise Arduino Workshop",
				"Event Date": "03 Dec 2021 12:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/294394",
			},
			{
				"Event Title": "KICAD Training session",
				"Event Date": "13 Nov 2021 1:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/293225",
			},
			{
				"Event Title": "IoT Festival",
				"Event Date": "18 Oct 2021 5:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/293499",
			},
			{
				"Event Title": "Iot Festival",
				"Event Date": "13 Oct 2021 5:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/293495",
			},
			{
				"Event Title": "IoT Festival",
				"Event Date": "06 Oct 2021 5:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/293475",
			},
			{
				"Event Title": "IoT Festival",
				"Event Date": "01 Oct 2021 5:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/293358",
			},
			{
				"Event Title": "From Dark Web To Crypto",
				"Event Date": "17 Sep 2021 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/293771",
			},
			{
				"Event Title":
					"Emerging technologies in robotics for factory automation",
				"Event Date": "02 Sep 2021 10:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/292812",
			},
			{
				"Event Title": "COLLABORATION WITH IEEE RAS NCU SB 2.0",
				"Event Date": "18 Aug 2021 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/279980",
			},
			{
				"Event Title": "SolidWorks Workshop",
				"Event Date": "06 Aug 2021 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/279540",
			},
			{
				"Event Title": "Collaboration with University of Mauritius IET",
				"Event Date": "03 Aug 2021 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/279986",
			},
			{
				"Event Title": "Webinar on Basics of Robotics and AI event",
				"Event Date": "15 Jul 2021 12:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/280197",
			},
			{
				"Event Title": "Collaboration with IEEE RAS NCU SB - India",
				"Event Date": "19 Jun 2021 12:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/275355",
			},
			{
				"Event Title": "Python Bootcamp, IOT & Digital Marketing",
				"Event Date": "04 May 2021 9:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/275280",
			},
		],
	},
	{
		name: "IAS IES PES Joint Chapter (IIP)",
		slug: "iip",
		team: [
			{
				name: "Yomna Ismail",
				title: "Chair",
				imageSmall: {
					url: "/assets/people/Yomna ismail - chair.jpeg",
				},
			},
			{
				name: "Rami Kouraychi",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Rami Kouraychi - vice chair.jpg",
				},
			},
			{
				name: "Eya ben Hassyne",
				title: "Webmaster",
				imageSmall: {
					url: "/assets/people/Eya ben Hassyne - Webmaster.PNG",
				},
			},
			{
				name: "Molka Slama",
				title: "Treasurer",
				imageSmall: {
					url: "/assets/people/Molka Slama - Treasure.jpg",
				},
			},
			{
				name: "Naoures Knani",
				title: "General Secretary",
				imageSmall: {
					url: "/assets/people/Naoures Knani - SG.jpeg",
				},
			},
			{
				name: "Fraj Ben Kalai",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Fraj Ben Kalai  - Vice chair.jpg",
				},
			},
			{
				name: "Ilyes Sayeh",
				title: "Industry Coordinator",
				imageSmall: {
					url: "/assets/people/Ilyes Sayeh - Industry coordinator.jpg",
				},
			},
		],
		events: [
			{
				"Event Title": "IAS Tunisia Annual Meeting Participation",
				"Event Date": "01 Jun 2023 11:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/365224",
			},
			{
				"Event Title": "Graphic design workshop session 3",
				"Event Date": "12 Apr 2023 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362277",
			},
			{
				"Event Title": "GRAPHIC DESIGN WORKSHOP Session 2",
				"Event Date": "10 Apr 2023 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362275",
			},
			{
				"Event Title": "Graphic Design Workshops",
				"Event Date": "07 Apr 2023 9:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/361791",
			},
			{
				"Event Title": "Business Workshop",
				"Event Date": "04 Apr 2023 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/361788",
			},
			{
				"Event Title": "First Gear",
				"Event Date": "21 Aug 2022 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337164",
			},
			{
				"Event Title": "Kid's paradise Hackathon",
				"Event Date": "10 Jun 2022 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/317235",
			},
			{
				"Event Title": "Ramadan Tech Talks : Introduction To BMC",
				"Event Date": "26 Apr 2022 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/316621",
			},
			{
				"Event Title": "Ramadan Tech Talks : Intro To Agile Project Management",
				"Event Date": "23 Apr 2022 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/313082",
			},
			{
				"Event Title": "Ramadan Tech Talks : Introduction To DevOps",
				"Event Date": "22 Apr 2022 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/313076",
			},
			{
				"Event Title":
					"Ramadan Tech Talks 2nd Session : Introduction To Web Development",
				"Event Date": "12 Apr 2022 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/312499",
			},
			{
				"Event Title": "Ramadan Tech Talks : Graphic Design session 2.0",
				"Event Date": "10 Apr 2022 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311526",
			},
			{
				"Event Title": "Ramadan Tech Talks : Graphic Design session 1.0",
				"Event Date": "09 Apr 2022 10:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311480",
			},
			{
				"Event Title": "Kid's Paradise Arduino Workshop",
				"Event Date": "06 Apr 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311474",
			},
			{
				"Event Title": "Kid's Paradise Scratch Workshop",
				"Event Date": "05 Apr 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311475",
			},
			{
				"Event Title": "Arduino Workshop",
				"Event Date": "03 Apr 2022 1:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/310889",
			},
			{
				"Event Title": "Kid's Paradise Arduino Workshop",
				"Event Date": "03 Dec 2021 12:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/294394",
			},
			{
				"Event Title":
					"Emerging technologies in robotics for factory automation",
				"Event Date": "02 Sep 2021 10:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/292812",
			},
			{
				"Event Title": "SolidWorks Workshop",
				"Event Date": "06 Aug 2021 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/284764",
			},
			{
				"Event Title": "SolidWorks Workshop",
				"Event Date": "06 Aug 2021 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/284763",
			},
			{
				"Event Title": "Matlab from Zero To Hero",
				"Event Date": "02 Aug 2021 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/294148",
			},
			{
				"Event Title": "UI/UX Design",
				"Event Date": "07 Jul 2021 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/294264",
			},

			{
				"Event Title": "Participation in IOT Spark 1.0",
				"Event Date": "25 Nov 2023 9:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/387036",
			},
			{
				"Event Title": "Participation in powering the future summit 23",
				"Event Date": "11 Nov 2023 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/387826",
			},
			{
				"Event Title":
					"Participation in IEEE PES & IAS Power Africa Conference 2023 Marrakech Morroco",
				"Event Date": "01 Nov 2023 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/387034",
			},
			{
				"Event Title": "Let’s talk energy",
				"Event Date": "24 Sep 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/386998",
			},
			{
				"Event Title": "Brighten up the future 3.0",
				"Event Date": "10 Sep 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/373677",
			},
			{
				"Event Title": "Brighten Up the future 3.0",
				"Event Date": "10 Sep 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/375466",
			},
			{
				"Event Title": "Brighten Up The Future 3.0 Report",
				"Event Date": "10 Sep 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/374185",
			},
			{
				"Event Title":
					"Brighten Up The Future 3.0: Logistics Team Meeting Highlights",
				"Event Date": "07 Sep 2023 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/374183",
			},
			{
				"Event Title":
					"Brighten Up The Future 3.0: Workshops Team Meeting Highlights",
				"Event Date": "06 Sep 2023 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/374173",
			},
			{
				"Event Title": "Python Basicis",
				"Event Date": "05 Aug 2023 5:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/376640",
			},
			{
				"Event Title": "The language basis C",
				"Event Date": "17 Jul 2023 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/376778",
			},
			{
				"Event Title": "Panel Discussion: Energy and Environment",
				"Event Date": "10 Jul 2023 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/386996",
			},
			{
				"Event Title": "panel discussion Power & Energy and AI",
				"Event Date": "26 Jun 2023 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/366094",
			},
			{
				"Event Title": "Participation in IEEE PES GTD Istanbul",
				"Event Date": "22 May 2023 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/387045",
			},
			{
				"Event Title": "Tunisia Energy Gathering",
				"Event Date": "14 Apr 2023 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/359975",
			},
			{
				"Event Title": "Raspberry Pi Workshop",
				"Event Date": "15 Feb 2023 3:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/386990",
			},
			{
				"Event Title": "PES general meeting 3rd edition",
				"Event Date": "04 Dec 2022 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/336735",
			},
			{
				"Event Title": "PV system session 2.0",
				"Event Date": "19 Nov 2022 10:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/334901",
			},
			{
				"Event Title": "PV system session 1.0",
				"Event Date": "12 Nov 2022 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/334753",
			},
			{
				"Event Title": "smart grid technologies",
				"Event Date": "20 Jul 2022 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/325325",
			},
			{
				"Event Title": "Team Building",
				"Event Date": "13 Jul 2022 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/325123",
			},
			{
				"Event Title": "the role of IoT in the energy sector",
				"Event Date": "13 May 2022 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/317279",
			},
			{
				"Event Title": "IEEE PES DAY REMENA GATHERING",
				"Event Date": "16 Apr 2022 12:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337026",
			},
			{
				"Event Title": "JORDAN To TUNISIA WIP Talk",
				"Event Date": "26 Mar 2022 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/310551",
			},
			{
				"Event Title": "It's Camping Time",
				"Event Date": "14 Mar 2022 2:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/317401",
			},
			{
				"Event Title": "Brighten up the future 2nd Edition",
				"Event Date": "06 Feb 2022 9:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/313230",
			},
			{
				"Event Title": "Brighten up the future 2.0",
				"Event Date": "06 Feb 2022 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/307765",
			},
			{
				"Event Title": "Introduction to PVSystems",
				"Event Date": "02 Jan 2022 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/295473",
			},
			{
				"Event Title": "Brighten up the future First Edition",
				"Event Date": "14 Nov 2021 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/293050",
			},
			{
				"Event Title": "WIE ESSTHS X PES ESSTHS X PES ESPRIT",
				"Event Date": "07 Sep 2021 8:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/294417",
			},
			{
				"Event Title": "Matlab from Zero To Hero",
				"Event Date": "02 Aug 2021 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/294148",
			},
			{
				"Event Title": "Introduction to PES",
				"Event Date": "17 Jul 2021 7:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/294310",
			},
		],
	},
	{
		name: "Special Interest Group on Humanitarian Technology (SIGHT)",
		slug: "sight",
		team: [
			{
				name: "Faten Ouergli",
				title: "Chair",
				imageSmall: {
					url: "/assets/people/faten ouergli - chaire .jpg",
				},
			},
			{
				name: "Yassmine Sahli",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Yassmine Sahli_Vice Sight.jpg",
				},
			},
			{
				name: "Nourane Ben Salem",
				title: "Webmaster",
				imageSmall: {
					url: "/assets/people/nourane ben salem - webmaster.jpg",
				},
			},
			{
				name: "Rahma Soussi",
				title: "Treasurer",
				imageSmall: {
					url: "/assets/people/rahma soussi - treasure .jpg",
				},
			},
			{
				name: "Hajer Abdelaoui",
				title: "General Secretary",
				imageSmall: {
					url: "/assets/people/hajer abdelaoui - secrétaire générale .jpg",
				},
			},
		],
		events: [
			{
				"Event Title":
					"IEEE Region 8 Humanitarian Activities Committee Virtual Congress",
				"Event Date": "26 Nov 2023 5:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/386870",
			},
			{
				"Event Title": "OOP Online Workshop",
				"Event Date": "11 Nov 2023 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/386869",
			},
			{
				"Event Title": "Open Mic Orientation 3.0",
				"Event Date": "09 Jul 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337713",
			},
			{
				"Event Title": "Fit Fest",
				"Event Date": "14 May 2023 12:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/378335",
			},
			{
				"Event Title": "sight day celebration",
				"Event Date": "06 May 2023 8:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/362276",
			},
			{
				"Event Title": "IEEE SIGHT DAY",
				"Event Date": "26 Apr 2023 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362973",
			},
			{
				"Event Title": "sight birthday",
				"Event Date": "26 Apr 2023 10:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/362320",
			},
			{
				"Event Title": "Study Trip",
				"Event Date": "20 Mar 2023 8:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/354960",
			},
			{
				"Event Title": "Koffet romdhan",
				"Event Date": "27 Feb 2023 8:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/354566",
			},
			{
				"Event Title": "Dream job",
				"Event Date": "07 Dec 2022 2:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337171",
			},
			{
				"Event Title": "Pitch your way through the stars",
				"Event Date": "27 Nov 2022 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/336142",
			},
			{
				"Event Title": "HAC - SIGHT Congress",
				"Event Date": "01 Aug 2022 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/336151",
			},
			{
				"Event Title": "Open Mic Orientation",
				"Event Date": "17 Jul 2022 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/319452",
			},
		],
	},
	{
		name: "Women In Engineering (WIE)",
		slug: "wie",
		team: [
			{
				name: "Sarra Ghazaoui",
				title: "Chair",
				imageSmall: {
					url: "/assets/people/Sarra Ghazaoui - Chair.jpg",
				},
			},
			{
				name: "Nour Nsiri",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Nour Nsiri - Vice chair.jpg",
				},
			},
			{
				name: "Sirine Gassara",
				title: "Webmaster",
				imageSmall: {
					url: "/assets/people/Sirine Gassara - Webmaster.jpg",
				},
			},
			{
				name: "Mariem Jammeli",
				title: "Treasurer",
				imageSmall: {
					url: "/assets/people/Mariem Jammeli - Treasurer.jpg",
				},
			},
			{
				name: "Norhene Bessrour",
				title: "General Secretary",
				imageSmall: {
					url: "/assets/people/Norhene Bessrour SG.png",
				},
			},
		],
		events: [
			{
				"Event Title": "Brighten up the future 3.0",
				"Event Date": "10 Sep 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/373677",
			},
			{
				"Event Title": "Brighten Up the future 3.0",
				"Event Date": "10 Sep 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/375466",
			},
			{
				"Event Title": "Brighten Up The Future 3.0 Report",
				"Event Date": "10 Sep 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/374185",
			},
			{
				"Event Title":
					"Brighten Up The Future 3.0: Logistics Team Meeting Highlights",
				"Event Date": "07 Sep 2023 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/374183",
			},
			{
				"Event Title":
					"Brighten Up The Future 3.0: Workshops Team Meeting Highlights",
				"Event Date": "06 Sep 2023 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/374173",
			},
			{
				"Event Title": "WIE Day",
				"Event Date": "29 Aug 2023 9:20 AM",
				"Event URL": "https://events.vtools.ieee.org/m/370487",
			},
			{
				"Event Title": "c++ workshop session for embedded systems",
				"Event Date": "15 Jul 2023 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/375978",
			},
			{
				"Event Title": "Open Mic Orientation 3.0",
				"Event Date": "11 Jul 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337718",
			},
			{
				"Event Title": "Open Mic Orientation 3.0",
				"Event Date": "09 Jul 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337713",
			},
			{
				"Event Title": "Empower Her",
				"Event Date": "30 Apr 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/360116",
			},
			{
				"Event Title":
					"Fluttering Forward: Empowering Women In Engineering Through App Development",
				"Event Date": "25 Apr 2023 8:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362385",
			},
			{
				"Event Title":
					"Mastering the back-end: from the basics to advanced techniques",
				"Event Date": "02 Apr 2023 9:30 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362463",
			},
			{
				"Event Title": "Autism Day",
				"Event Date": "02 Apr 2023 5:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/372569",
			},
			{
				"Event Title": "women's congress and autism day",
				"Event Date": "23 Mar 2023 9:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/354403",
			},
			{
				"Event Title": "WIE TEDX",
				"Event Date": "15 Mar 2023 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/337717",
			},
			{
				"Event Title": "Woman's day",
				"Event Date": "08 Mar 2023 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/362470",
			},
			{
				"Event Title": "Pitch your way through the stars",
				"Event Date": "27 Nov 2022 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/336142",
			},
			{
				"Event Title": "Participation in WIE ACT",
				"Event Date": "01 Oct 2022 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/336904",
			},
			{
				"Event Title": "Zarzis Scouts: Introduction to Arduino",
				"Event Date": "19 Jul 2022 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/325849",
			},
			{
				"Event Title": "Open Mic Orientation",
				"Event Date": "17 Jul 2022 4:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/319452",
			},
			{
				"Event Title": "Kid's paradise Hackathon",
				"Event Date": "10 Jun 2022 1:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/317235",
			},
			{
				"Event Title": "MARIE CURIE COMPETITION",
				"Event Date": "11 May 2022 2:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337168",
			},
			{
				"Event Title": "Kid's Paradise Arduino Workshop",
				"Event Date": "06 Apr 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311474",
			},
			{
				"Event Title": "Kid's Paradise Scratch Workshop",
				"Event Date": "05 Apr 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/311475",
			},
			{
				"Event Title": "MARIE CURIE ARDUINO WORKSHOPS",
				"Event Date": "01 Mar 2022 1:15 PM",
				"Event URL": "https://events.vtools.ieee.org/m/337170",
			},
			{
				"Event Title": "Brighten up the future 2.0",
				"Event Date": "06 Feb 2022 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/307765",
			},
			{
				"Event Title": "Kid's Paradise Arduino Workshop",
				"Event Date": "03 Dec 2021 12:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/294394",
			},
			{
				"Event Title": "kid's paradise: Python Workshop",
				"Event Date": "02 Dec 2021 12:30 AM",
				"Event URL": "https://events.vtools.ieee.org/m/294369",
			},
			{
				"Event Title": "Brighten up the future First Edition",
				"Event Date": "14 Nov 2021 9:00 AM",
				"Event URL": "https://events.vtools.ieee.org/m/293050",
			},
			{
				"Event Title": "Violence against Women",
				"Event Date": "14 May 2021 7:00 PM",
				"Event URL": "https://events.vtools.ieee.org/m/277439",
			},
		],
	},
	{
		name: "Aerospace and Electronic Systems Society (AESS)",
		slug: "aess",
		team: [
			{
				name: "Ayoub Hlel",
				title: "Chair",
				imageSmall: {
					url: "/assets/people/Ayoub_Hlel_-_Chair.jpg",
				},
			},
			{
				name: "Molka Slama",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Molka slama - Vice chair.jpeg",
				},
			},
			{
				name: "Omar Jomaa",
				title: "Webmaster",
				imageSmall: {
					url: "/assets/people/Omar Jomaa - Webmaster.jpg",
				},
			},
			{
				name: "Aya Miladi",
				title: "Treasurer",
				imageSmall: {
					url: "/assets/people/Aya Miladi - Treasurer.jpeg",
				},
			},
			{
				name: "Nermine Ben Ameur",
				title: "General Secretary",
				imageSmall: {
					url: "/assets/people/Nermine Ben Ameur - SG.PNG",
				},
			},
		],
		events: [],
	},
];

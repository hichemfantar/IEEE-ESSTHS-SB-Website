import { Link, useNavigate, useParams } from "react-router-dom";

import cs_cover from "../../assets/chapters/cs_cover.jpg";
import ias_cover from "../../assets/chapters/ias_cover.jpg";
import pes_cover from "../../assets/chapters/pes_cover.jpg";
import ras_cover from "../../assets/chapters/ras_cover.jpg";
import wie_cover from "../../assets/chapters/wie_cover.jpg";
import sight_cover from "../../assets/chapters/sight_cover.jpg";

export const chapters = [
	{
		name: "Computer Society (CS)",
		descpt:
			"Engaging computer engineers, scientists, academia, and industry professionals from all areas of computing, the IEEE Computer Society (CS) sets the standard for the education and engagement that fuels continued global technological advancement. Through conferences, publications, and programs, and by bringing together computer science and engineering leaders at every phase of their career for dialogue, debate, and collaboration, IEEE CS empowers, shapes, and guides the future of not only its members, but the greater industry, enabling new opportunities to better serve our world.",
		color: "#e9c201",
		variantcolor: "#c65503",
		momos: "/assets/momoset/momos_cs.svg",
		slug: "cs",
		excom_image: cs_cover,
		team: [
			// {
			// 	name: "Ahmed Jguirim",
			// 	title: "Chair",
			// 	imageSmall: {
			// 		url: "/assets/people/Ahmed Jguirim - CS Chair.jpg",
			// 	},
			// },
			{
				name: "Aroua Blidi",
				title: "Vice Chair",
				imageSmall: {
					url: "/assets/people/Ahmed Kahloun - Vice Chair.jpg",
				},
			},
			// {
			// 	name: "Elaa ben Othmen",
			// 	title: "Webmaster",
			// 	imageSmall: {
			// 		url: "/assets/people/Elaa ben Othmen - Webmaster.jpg",
			// 	},
			// },
			// {
			// 	name: "Fourat Idani",
			// 	title: "Treasurer",
			// 	imageSmall: {
			// 		url: "/assets/people/Fourat Idani - Treasurer.jpg",
			// 	},
			// },
			// {
			// 	name: "Rayhan Souai",
			// 	title: "General Secretary",
			// 	imageSmall: {
			// 		url: "/assets/people/Rayhan Souai - SG.jpeg",
			// 	},
			// },
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
		descpt:
			"The IEEE Robotics and Automation Society (RAS) is a group within IEEE that focuses on robotics and automation. It supports research, organizes conferences, and helps professionals and students in the field.",
		color: "#bc0010",
		variantcolor: "#740f00",
		momos: "/assets/momoset/momos_ras.svg",
		slug: "ras",
		excom_image: ras_cover,
		team: [
			{
				name: "Mohamed Anwer Saafi",
				title: "Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743402415/Mask_group_34_zr04us.png",
				},
			},
			 
			 {
			 	name: "Rayen Chehata",
			 	title: "Vice Chair",
			 	imageSmall: {
			 		url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743407096/vice_uvhn3p.png",
			 	},
			 },
			{
				name: "Mohmed Baklouti",
				title: "webmaster",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742609272/webmaster-removebg-preview_eiq0bq.png",
				},
			},
			// ,
			// {
			// 	name: "Ahmed Kilani",
			// 	title: "Webmaster",
			// 	imageSmall: {
			// 		url: "/assets/people/Ahmed Kilani - Webmaster.jpg",
			// 	},
			// },
			{
				name: "Razi Chamsa",
				title: "Treasurer",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742609240/treso_rtcfla.png",
				},
			},
			// ,
			// {
			// 	name: "Chaima Ayed",
			// 	title: "General Secretary",
			// 	imageSmall: {
			// 		url: "/assets/people/chaima_ayed_-_General_secretary_RAS_chapter.jpg",
			// 	},
			// },
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
		descpt:
			"The IEEE IAS-IES-PES Joint Chapter at ESSTHS serves as a dynamic platform for students passionate about industrial applications, power and energy systems, and industrial electronics. By integrating the expertise of the IEEE Industry Applications Society (IAS), IEEE Industrial Electronics Society (IES), and IEEE Power & Energy Society (PES), this chapter fosters technical excellence, professional growth, and industry engagement. Through a variety of initiatives—including workshops, seminars, technical projects, and industrial visits—members gain valuable hands-on experience and insights into real-world engineering challenges, effectively bridging the gap between academia and industry.",
		color: "#1a9e39",
		variantcolor: "#0e5b30",
		momos: "/assets/momoset/momos_iip.svg",
		slug: "iip",
		excom_image: pes_cover,
		team: [
			{
				name: "Yassine Hallous",
				title: "Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743400191/chair1_lzshyq.png",
				},
			},
			// {
			// 	name: "Fedi Bayoudhi",
			// 	title: "Vice Chair",
			// 	imageSmall: {
			// 		url: "/assets/people/Rami Kouraychi - vice chair.jpg",
			// 	},
			// }
			// ,
			{
				name: "Mohamed Guizeni ",
				title: "Vice Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742608482/vice_tfdck6.png",
				},
			},
			{
				name: "Abdelmoemen Kileni",
				title: "Treasurer",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742608478/treso_ibleog.png",
				},
			},	{
				name: "Ghassen Mekki",
				title: "WebMaster",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743400487/webmaster_dfofcg.png",
				},
			},	{
				name: "Ranim Laifi",
				title: "General Secretary",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743400453/ag_wd42qp.png",
				},
			},
			// ,
			// {
			// 	name: "Naoures Knani",
			// 	title: "General Secretary",
			// 	imageSmall: {
			// 		url: "/assets/people/Naoures Knani - SG.jpeg",
			// 	},
			// },
			// {
			// 	name: "Fraj Ben Kalai",
			// 	title: "Vice Chair",
			// 	imageSmall: {
			// 		url: "/assets/people/Fraj Ben Kalai  - Vice chair.jpg",
			// 	},
			// },
			// {
			// 	name: "Ilyes Sayeh",
			// 	title: "Industry Coordinator",
			// 	imageSmall: {
			// 		url: "/assets/people/Ilyes Sayeh - Industry coordinator.jpg",
			// 	},
			// },
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
	// {
	// 	name: "Power & Energy Society",
	// 	slug: "pes",
	// 	excom_image: pes_cover,
	// },
	// {
	// 	name: "Industry Applications Society",
	// 	slug: "ias",
	// 	excom_image: ias_cover,
	// },
	{
		name: "Special Interest Group on Humanitarian Technology (SIGHT)",
		descpt:
			"SIGHT (Special Interest Group on Humanitarian Technology) is an IEEE program dedicated to leveraging technology for social good. Our chapter at ESSTHS focuses on developing innovative solutions to address local and global humanitarian challenges, fostering collaboration among students, professionals, and communities. Through workshops, projects, and outreach initiatives, we aim to make a positive impact using engineering and technology.",
		color: "#c65503",
		variantcolor: "#CD163E",
		momos: "/assets/momoset/momos_sight.svg",
		slug: "sight",
		excom_image: sight_cover,
		team: [
			{
				name: "Salim Hamouda",
				title: "Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742607540/chair_aohb6r.png",
				},
			},
			{
				name: "Yassine Boudagga",
				title: "Vice Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742607539/treso_ntfk38.png",
				},
			},
			// {
			// 	name: "Nourane Ben Salem",
			// 	title: "Webmaster",
			// 	imageSmall: {
			// 		url: "/assets/people/nourane ben salem - webmaster.jpg",
			// 	},
			// }
			{
				name: "Souleiman Ben Salem",
				title: "Treasurer",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742607539/vice_sor1ft.png",
				},
			},
			// {
			// 	name: "Hajer Abdelaoui",
			// 	title: "General Secretary",
			// 	imageSmall: {
			// 		url: "/assets/people/hajer abdelaoui - secrétaire générale .jpg",
			// 	},
			// },
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
		descpt:
			"IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests in a career in engineering and science.",
		color: "#ad0fa4",
		variantcolor: "#4c1064",
		momos: "/assets/momoset/momos_wie.svg",
		slug: "wie",
		excom_image: wie_cover,
		team: [
			{
				name: "Salma Ghedamsi",
				title: " Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743402991/chair_zjivdp.png",
				},
			},
			{
				name: "Nermine Ben Ameur",
				title: "Vice Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743403533/vice_p9wkyf.png",
				},
			},
			{
				name: "Eya Bouebsa",
				title: "Webmaster",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743402946/webmaster_rbjzbo.png",
				},
			},
			// {
			// 	name: "Mariem Jammeli",
			// 	title: "Treasurer",
			// 	imageSmall: {
			// 		url: "/assets/people/Mariem Jammeli - Treasurer.jpg",
			// 	},
			// },
			{
				name: "Fatma Ben Jedida",
				title: "General Secretary",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1742600259/ag_mtrjky.png",
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
		descpt:
			"The IEEE AESS Student Branch Chapter (SBC) at ESSTHS is dedicated to advancing knowledge and innovation in aerospace, electronic systems, and embedded technologies. Our mission is to provide a platform for students to explore cutting-edge fields such as avionics, satellite communications, radar systems, autonomous aerospace applications, and embedded electronic systems./n Through workshops, technical sessions, hands-on projects, and industry collaborations, we bridge the gap between theory and real-world applications. By connecting students with professionals, researchers, and IEEE AESS resources, we foster a dynamic community passionate about shaping the future of aerospace, electronics, and embedded systems.",
		color: "#4a12aa",
		variantcolor: "#4c1064",
		momos: "/assets/momoset/momos_aess.svg",
		slug: "aess",
		excom_image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
		team: [
			{
				name: "Chermiti Emna",
				title: "Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743403950/chair_m4wjgh.png",
				},
			},
			{
				name: "Rahma Maghayeth",
				title: "Vice Chair",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741533755/wicecahir_idg7wk.png",
				},
			},
			// {
			// 	name: "Tesnim Maatalli ",
			// 	title: "Webmaster",
			// 	imageSmall: {
			// 		url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741533704/sg_uw8uyw.png",
			// 	},
			// },
			{
				name: "Lamis Benfraj",
				title: "Treasurer",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743403904/Treasurer_ksnvbh.png",
				},
			},
			{
				name: "Maryem Baklouti",
				title: "General Secretary",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743403829/sg_uw8uyw.png",
				},
			},{
				name: "Fourat Ideni",
				title: "WebMaster",
				imageSmall: {
					url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1743404550/webmaster_p2hvpp.png",
				},
			}
		],
		events: [
			{
				"Event Title": "Aess Talk",
				"Event Date": "15 Apr 2023 12:00 AM",
				"State": "inproress",
				"Event_image": "https://res.cloudinary.com/dytybjqwb/image/upload/v1743120305/aess_talk_q9xprg.png",
				"desrip":"AESS Ramadhan Talks 2.0 (2025): This year, AESS Ramadhan Talks 2.0 returns as an online event featuring a series of expert-led workshops and sessions. Focused on 'Technologies and Communications in Space,' the event will cover key topics such as 5G and space, cybersecurity, IoT, and their implementation in space. It provides a platform for participants to gain valuable insights from industry experts and explore the latest advancements shaping the future of space technology.",
			},
			{
				"Event Title": "Solid works bootcamp",
				"Event Date": "25 Apr 2023 8:30 PM",
				"State": "inproress",
				"Event_image": "https://res.cloudinary.com/dytybjqwb/image/upload/v1743409655/solidwork_dnovue.png",
				
		"desrip":"SolidWorks Bootcamp (IIP Joint Chapters x AESS SBC x RAS SBC): A collaborative initiative between IIP Joint Chapters, AESS SBC, and RAS SBC, the SolidWorks Bootcamp was established to provide hands-on training in 3D modeling, design, and simulation. Designed for both beginners and advanced learners, this bootcamp has played a key role in equipping participants with the technical skills needed to master SolidWorks through interactive sessions and practical exercises, fostering a community of learners passionate about innovation and design."
			},
		],
	},
	// {
	// 	name: "CIS",
	// 	slug: "cis",
	// 	excom_image:
	// 		"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
	// },
];

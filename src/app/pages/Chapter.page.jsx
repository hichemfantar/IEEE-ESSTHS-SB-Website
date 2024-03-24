import { Link, useNavigate, useParams } from "react-router-dom";

import cs_cover from "../../assets/chapters/cs_cover.jpg";
import ias_cover from "../../assets/chapters/ias_cover.jpg";
import pes_cover from "../../assets/chapters/pes_cover.jpg";
import ras_cover from "../../assets/chapters/ras_cover.jpg";
import wie_cover from "../../assets/chapters/wie_cover.jpg";
import sight_cover from "../../assets/chapters/sight_cover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Chapter from "../components/Chapter";

export default function ChapterPage() {
	const { chapterSlug } = useParams();
	const navigate = useNavigate();
	const currentChapter = chapters.find((s) => s.slug === chapterSlug);

	if (!currentChapter) {
		return navigate("/");
	}

	return (
		<Link to={"/activities"}>
			<div className="mb-12 flex items-center justify-center gap-3">
				<FontAwesomeIcon icon={faExternalLink} className="text-xl" />
				<h2 className="text-center text-4xl font-bold">
					{currentChapter.name}
				</h2>
			</div>
			{/* <div className="flex items-center justify-center">
				<img
					className="mb-8 rounded-2xl object-cover shadow-lg md:h-[42rem]"
					src={currentChapter.excom_image}
					alt=""
				/>
			</div> */}
			<Chapter chapter={currentChapter} />
			{/* <div className="mb-12">
				<ExCom />
			</div>
			<div>
				<Chairs />
			</div> */}
		</Link>
	);
}

export const chapters = [
	{
		name: "Computer Society",
		slug: "cs",
		excom_image: cs_cover,
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
	},
	{
		name: "Robotics & Automation",
		slug: "ras",
		excom_image: ras_cover,
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
	},
	{
		name: "IAS IES PES Joint Chapter",
		slug: "iip",
		excom_image: pes_cover,
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
		name: "Special Interest Group on Humanitarian Technology",
		slug: "sight",
		excom_image: sight_cover,
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
	},
	{
		name: "Women In Engineering",
		slug: "wie",
		excom_image: wie_cover,
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
	},
	{
		name: "Aerospace and Electronic Systems Society",
		slug: "aess",
		excom_image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
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
	},
	// {
	// 	name: "CIS",
	// 	slug: "cis",
	// 	excom_image:
	// 		"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
	// },
];

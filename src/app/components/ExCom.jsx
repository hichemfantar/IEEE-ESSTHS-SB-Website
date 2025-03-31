import ahmed_hmila from "../../assets/OC pictures/ahmed_hmila.jpg";
import "./exCome.css";

export default function ExCom() {
	return (
		<div className="xflex container mx-auto flex-1 p-4 py-[1rem] 2xl:px-24">
			<div className="mb-8 text-4xl font-bold">
				Meet the Executive Committee
			</div>
			<div className="grid grid-cols-12 gap-4  sm:grid-cols-12  md:grid-cols-8 md:gap-4  ">
				{teamData
					?.filter((s) => !!s?.active)
					?.map((speaker) => (
						// <Link
						// 	key={speaker.name}
						// 	to={speaker.name}
						// 	className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
						// >
						<div
							key={speaker.name}
							className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2    "
						>
							<img
								style={{
									objectPosition: "center top",
								}}
								src={speaker.imageSmall.url}
								alt=""
								className="aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
								loading="lazy"
							/>
							<div className="text-center -mt-12">
								<div className="font-bold  ">{speaker.name}</div>
								{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
								<div className="text-sm  ">
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

export const teamData = [
	{
		active: true,
		name: "Arije Ben Abdel Hamid",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Chair",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1740351691/arije_wfumxl.png",
		},
	},
	{
		active: true,
		name: "Yomna Ismail",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Vice Chair",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741222794/yomna_vhkxfs.png",
		},
		imageSmall: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1740351983/yomna_trtdlf.png",
		},
	},
	{
		active: true,
		name: "Yassmine Sahli",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "General Secretary",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741222794/yassmine_jszfdz.png",
		},
		imageSmall: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1740353036/yassmine_dnnoj2.png",
		},
	},
	{
		active: true,
		name: "Treasurer",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Naissen Chebbi",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741222796/arije_fi9u5i.png",
		},
		imageSmall: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1740353116/naissen_s4m1a0.png",
		},
	},
	{
		active: true,
		name: "Nesrine Ncibi",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Webmaster",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1740353378/Nesrine_bb4loj.png",
		},
	},
	// ,
	// {
	// 	active: true,
	// 	name: "Naissen Chebbi",
	// 	bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
	// 	title: "Human Resources Chief",
	// 	talk: {
	// 		title: "Keynote",
	// 		description:
	// 			"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
	// 		youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
	// 	},
	// 	slug: "rauchg",
	// 	twitterUsername: "rauchg",
	// 	company: {
	// 		name: "Vercel",
	// 	},
	// 	image: {
	// 		url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
	// 	},
	// 	imageSmall: {
	// 		url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1740353116/naissen_s4m1a0.png",
	// 	},
	// }
	{
		active: true,
		name: "Fourat Idani",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Media Chief",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741222792/fourat_fgoizt.png",
		},
		imageSmall: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1740353114/fourat_xhwrpv.png",
		},
	},
];

export const teamData2023 = [
	{
		active: true,
		name: "Rima Fathallah",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Chair",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://essths.ieee.tn/excoms/chair.jpg",
		},
	},
	{
		active: true,
		name: "Ahmed Hmila",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Vice Chair",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: ahmed_hmila,
		},
	},
	{
		active: true,
		name: "Fedi Nabli",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Webmaster",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741222793/Nesrine_r6qxpj.png",
		},
		imageSmall: {
			url: "https://essths.ieee.tn/excoms/webmaster.jpg",
		},
	},
	{
		active: true,
		name: "Ahmed Hmila",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Human Resources Chief",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: ahmed_hmila,
		},
	},

	{
		active: true,
		name: "Yasmine Douik",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "General Secretary",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://res.cloudinary.com/dytybjqwb/image/upload/v1741222794/yassmine_jszfdz.png",
		},
		imageSmall: {
			url: "https://essths.ieee.tn/excoms/sg.jpg",
		},
	},
	{
		active: true,
		name: "Treasurer",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Aymen Lassouad",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://essths.ieee.tn/excoms/treasurer.jpg",
		},
	},
];

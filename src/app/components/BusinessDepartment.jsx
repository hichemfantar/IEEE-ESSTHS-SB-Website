import nour_jeday from "../../assets/OC pictures/nour_jeday.jpg";
import iheb_kortas from "../../assets/OC pictures/iheb_kortas.jpg";
import ahmed_hmila from "../../assets/OC pictures/ahmed_hmila.jpg";

export default function BusinessDepartment() {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">
				Meet the Business Department
			</div>
			<div className="grid grid-cols-12 gap-y-4 md:gap-4">
				{teamData
					?.filter((s) => !!s?.active)
					?.map((speaker) => (
						// <Link
						// 	key={speaker.name}
						// 	to={speaker.name}
						// 	className="col-span-12 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-4 lg:col-span-3 2xl:col-span-2"
						// >
						<div
							key={speaker.name}
							className="col-span-12 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-4 lg:col-span-3 2xl:col-span-2"
						>
							<img
								style={{
									objectPosition: "center top",
								}}
								src={speaker.imageSmall.url}
								alt=""
								className="mb-2 h-96 w-full rounded-lg object-cover md:h-64"
								loading="lazy"
							/>
							<div className="font-bold">{speaker.name}</div>
							{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
							<div className="text-sm">
								{speaker.title}
								{false && `, ${speaker.company.name}`}
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
		name: "Salma Ghedamsi",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Chief",
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
		name: "Nayssen Chebbi",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Vice Chief",
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
			url: iheb_kortas,
		},
	},
	{
		active: true,
		name: "Salma Achour",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Marketing Manager",
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
			url: nour_jeday,
		},
	},
	{
		active: true,
		name: "Kacem Obey",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Sponsorship Manager",
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
			url: "https://essths.ieee.tn/excoms/sg.jpg",
		},
	},
	{
		active: true,
		name: "Logistics Manager",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Imen Ben Hassine",
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
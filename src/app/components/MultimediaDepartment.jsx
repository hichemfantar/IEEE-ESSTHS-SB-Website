export default function MultimediaDepartment() {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">
				Meet the Multimedia Department
			</div>
			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{teamData
					?.filter((s) => !!s?.active)
					?.map((speaker) => (
						<div
							key={speaker.name}
							className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
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
							<div className="font-bold">{speaker.name}</div>
							<div className="text-sm">{speaker.title}</div>
						</div>
					))}
			</div>
		</div>
	);
}

export const teamData = [
	{
		active: true,
		name: "Ghada Ben Mansour",
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
			url: "/assets/OC pictures/ghada_ben_mansour.jpg",
		},
	},
	{
		active: true,
		name: "Mohamed Yamen Ouannes",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Manager",
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
			url: "/assets/OC pictures/yamen_ouannes.jpg",
		},
	},
	{
		active: true,
		name: "Farah Fassi",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Manager",
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
			url: "/assets/OC pictures/farah_fassi.jpg",
		},
	},
	{
		active: true,
		name: "Salma Achour",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Manager",
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
		name: "Emna Jbeli",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Manager",
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
			url: "/assets/OC pictures/emna_jbeli.jpg",
		},
	},
	{
		active: true,
		name: "Arije Ben Abd Elhamid",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Manager",
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
			url: "/assets/OC pictures/arije_bh.jpg",
		},
	},
];

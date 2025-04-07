export default function Chairs() {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">Meet our Chairs</div>
			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{chairsData
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
						</div>
					))}
			</div>
		</div>
	);
}

export const chairsData = [
	{
		active: true,
		name: "Aziz Knaz",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Robotics & Automation",
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
			url: "/assets/people/Aziz Knaz - Chair.jpg",
		},
	},
	{
		active: true,
		name: "Ahmed Jguirim",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Computer Society",
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
			url: "/assets/people/Ahmed Jguirim - CS Chair.jpg",
		},
	},
	{
		active: true,
		name: "Ayoub Hlel",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Aerospace and Electronic Systems Society",
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
			url: "/assets/people/Ayoub_Hlel_-_Chair.jpg",
		},
	},
	{
		active: true,
		name: "Faten Ouergli",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Special Interest Group on Humanitarian Technology",
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
			url: "/assets/people/faten ouergli - chaire .jpg",
		},
	},
	{
		active: true,
		name: "Yomna Ismail",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "IAS IES PES Joint Chapter",
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
			url: "/assets/people/Yomna ismail - chair.jpeg",
		},
	},
	{
		active: true,
		name: "Sarra Ghazaoui",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Women In Engineering",
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
			url: "/assets/people/Sarra Ghazaoui - Chair.jpg",
		},
	},
];

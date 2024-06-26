import {
	faChevronLeft,
	faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import ExpoDetailsResources from "./ExpoDetailsResources";
import { companiesMock } from "./ExpoList";
import StyledButton from "./StyledButton";

export default function ExpoItemDetails() {
	const { companySlug } = useParams();

	const currentCompany = companiesMock.find((s) => s.slug === companySlug);

	return (
		<div className="mx-auto max-w-3xl">
			<div className="mb-8 inline-block text-sm">
				<Link to="/expo" className="text-gray-700 dark:text-gray-300">
					<FontAwesomeIcon icon={faChevronLeft} />{" "}
					<span className="font-bold hover:underline">Back to Expo</span>
				</Link>
			</div>

			<ExpoDetails data={currentCompany} />
		</div>
	);
}

function ExpoDetails({ data }) {
	return (
		<div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
			<div className="col-span-full md:col-span-5">
				<img
					loading="lazy"
					src={data.logo.url || data.logo}
					alt=""
					className="mx-auto aspect-video h-48 rounded-lg bg-black object-contain p-6"
				/>
				<div className="mt-4 hidden md:block">
					{data.links && <ExpoDetailsResources links={data.links} />}
				</div>
			</div>
			<div className="col-span-full flex flex-col gap-4 md:col-span-7">
				<div className="">
					<div className="flex justify-between">
						<div className="text-2xl font-bold">{data.name}</div>
					</div>
				</div>

				<div>
					<p>{data.description}</p>
				</div>

				<div>
					<a href={data.website}>
						<StyledButton
							message={"Learn More"}
							icon={<FontAwesomeIcon icon={faExternalLink} />}
						/>
					</a>
				</div>

				{data.links && (
					<div className="block md:hidden">
						<ExpoDetailsResources links={data.links} />
					</div>
				)}
			</div>
		</div>
	);
}

const companyMock = {
	name: "AWS",
	description:
		"Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.",
	slug: "vercel",
	website: "https://vercel.com/",
	discord: null,
	youtube: "",
	cardImage: null,
	logo: {
		url: "https://www.datocms-assets.com/35255/1665957463-sponsor-logo-vercel.png",
	},
	links: [
		{
			text: "Signup",
			url: "https://vercel.com/signup?utm_source=nextjs_conf&utm_medium=web&utm_campaign=nextjs_conf_platform_page_sponsor_signup",
		},
		{
			text: "Contact Sales",
			url: "https://vercel.com/contact/sales?utm_source=nextjs_conf&utm_medium=web&utm_campaign=nextjs_conf_platform_page_sponsor_contact_sales",
		},
		{
			text: "Blog",
			url: "https://vercel.com/blog?utm_source=nextjs_conf&utm_medium=web&utm_campaign=nextjs_conf_platform_page_sponsor_blog",
		},
	],
};

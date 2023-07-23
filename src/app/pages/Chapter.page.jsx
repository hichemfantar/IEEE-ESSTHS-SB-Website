import React from "react";
import ExCom from "../components/ExCom";
import Chairs from "../components/Chairs";
import { useParams } from "react-router-dom";

export default function ChapterPage() {
	const { chapterSlug } = useParams();
	const currentChapter = chapters.find((s) => s.slug === chapterSlug);

	return (
		<div>
			<div className="flex items-center justify-center">
				<img
					className="mb-8 h-[42rem] rounded-2xl object-cover shadow-lg"
					src={currentChapter.image}
					alt=""
				/>
			</div>
			{/* <div className="mb-12">
				<ExCom />
			</div>
			<div>
				<Chairs />
			</div> */}
		</div>
	);
}

export const chapters = [
	{
		name: "Computer Society",
		slug: "cs",
		image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
	},
	{
		name: "Robotics & Automation",
		slug: "ras",
		image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/344179433_154259910906101_9079658621426942813_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=sUb_BP2wxm4AX8Q99w7&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAIPBtiY6MtMXYoxEpRBVMHuGJaKUwwWdzSYrgdNM9Z2g&oe=64C262B0",
	},
	{
		name: "Power & Energy Society",
		slug: "pes",
		image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343770782_271820201859212_2593160087828905902_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=OgCkruXio34AX8cqjPn&_nc_ht=scontent.ftun16-1.fna&oh=00_AfDGzDp95WEbbuJcYARnUs-nLcKFzfMdzGl-PPMKdGou9A&oe=64C2769F",
	},
	{
		name: "Industry Applications Society",
		slug: "ias",
		image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/344458974_168129492549706_1592390908055417511_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=DGQMx5C9jJgAX-s5odp&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBGBwEhh3rmWd7lECPqistFBE8tV6en5ghMocuCyN0YJg&oe=64C31A83",
	},
	{
		name: "Special Interest Group on Humanitarian Technology",
		slug: "sight",
		image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/344304052_619921456389443_3925633862258915111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=7ddFz8o1DhAAX9F1sn2&_nc_ht=scontent.ftun16-1.fna&oh=00_AfDJgLPIkKPtA02z8sTgrvXK5tGsfjIRPXVqMBWmdSAu6g&oe=64C33C0E",
	},
	{
		name: "Computer Society",
		slug: "aess",
		image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
	},
	{
		name: "Women In Engineering",
		slug: "wie",
		image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/344031921_612371720774170_1640951862622779526_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bTMomd-MnYUAX-mJzDq&_nc_ht=scontent.ftun16-1.fna&oh=00_AfD9sUovidecN5lkJ09iU2yKAeoAkxbE6zPxrL66NiU52Q&oe=64C3359D",
	},
];

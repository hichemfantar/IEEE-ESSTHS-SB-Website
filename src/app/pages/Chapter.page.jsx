import { useNavigate, useParams } from "react-router-dom";

import cs_cover from "../../assets/chapters/cs_cover.jpg";
import ias_cover from "../../assets/chapters/ias_cover.jpg";
import pes_cover from "../../assets/chapters/pes_cover.jpg";
import ras_cover from "../../assets/chapters/ras_cover.jpg";
import wie_cover from "../../assets/chapters/wie_cover.jpg";
import sight_cover from "../../assets/chapters/sight_cover.jpg";

export default function ChapterPage() {
	const { chapterSlug } = useParams();
	const navigate = useNavigate();
	const currentChapter = chapters.find((s) => s.slug === chapterSlug);

	if (!currentChapter) {
		return navigate("/");
	}

	return (
		<div>
			<div className="flex items-center justify-center">
				<img
					className="mb-8 rounded-2xl object-cover shadow-lg md:h-[42rem]"
					src={currentChapter.excom_image}
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
		excom_image: cs_cover,
	},
	{
		name: "Robotics & Automation",
		slug: "ras",
		excom_image: ras_cover,
	},
	{
		name: "Power & Energy Society",
		slug: "pes",
		excom_image: pes_cover,
	},
	{
		name: "Industry Applications Society",
		slug: "ias",
		excom_image: ias_cover,
	},
	{
		name: "Special Interest Group on Humanitarian Technology",
		slug: "sight",
		excom_image: sight_cover,
	},
	{
		name: "Women In Engineering",
		slug: "wie",
		excom_image: wie_cover,
	},
	{
		name: "AESS",
		slug: "aess",
		excom_image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
	},
	{
		name: "CIS",
		slug: "cis",
		excom_image:
			"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/343659367_1699499560470613_5370874928584365932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4nyr2B8VhIAX_4Yjz3&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8-pmvjaCbhmuRkiZWOteAYdvv1JgwcvdYCFWzjTOdGg&oe=64C2806C",
	},
];

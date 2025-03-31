import { Chapters } from "./Home.page";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ChaptersPage() {

			const { chapterSlug } = useParams();
			useEffect(() => {
				const faviconMap = {
					"/": "/favicon-32x32.png",
			"/cs": "/csicons.png",
			"/wie": "/wie_icons.png",
			"/aess": "/aessold.png",
			"/ras": "/icons/wie.png",
			"/iip": "/icons/wie.png",
			"/sight": "/icons/wie.png",
				  };
				console.log('chapterSlug',chapterSlug)
		
				const favicon = document.querySelector("link[rel='icon']");
				if (favicon) {
				  favicon.href = faviconMap[chapterSlug] || "/favicon-32x32.png"; // Default favicon
				}
			  }, [chapterSlug]);
	return (
		<div className="py-8 md:py-20">
			<Chapters />
		</div>
	);
}

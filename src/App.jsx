import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./app/components/AppLayout.jsx";
import Speaker from "./app/components/Speaker.jsx";
import Speakers from "./app/components/Speakers.jsx";
import ActivitiesPage from "./app/pages/Activities.page.jsx";
import ChapterPage from "./app/pages/Chapter.page.jsx";
import ChaptersPage from "./app/pages/Chapters.page.jsx";
import ContactPage from "./app/pages/Contact.page.jsx";
import ExpoPage from "./app/pages/Expo.page.jsx";
import ExpoDetailsPage from "./app/pages/ExpoDetails.page.jsx";
import HomePage from "./app/pages/Home.page.jsx";
import SchedulePage from "./app/pages/Schedule.page.jsx";
import SponsorUsPage from "./app/pages/SponsorUs.page.jsx";
import TeamPage from "./app/pages/Team.page.jsx";
import AwardsMapPage from "./app/pages/AboutUs.page.jsx";

import TunisiaPage from "./app/pages/Tunisia.page.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { chapters } from "./app/data/chatpers.jsx";
import { useEffect } from "react";

// setInitialTheme();

const router = createBrowserRouter([
	{
		element: <AppLayout></AppLayout>,
		children: [
			{
				path: "/",
				// index: true,
				element: <HomePage />,
			},
			{
				path: "aboutus",
				// index: true,
				element: <AwardsMapPage />,
			},
			{
				path: "tunisia",
				element: <TunisiaPage />,
			},
			{
				path: "expo",
				element: <ExpoPage />,
			},
			{
				path: "schedule",
				element: <SchedulePage />,
			},
			{
				path: "expo/:companySlug",
				element: <ExpoDetailsPage />,
			},
			{
				path: "speakers",
				element: <Speakers />,
			},
			{
				path: "speakers/:speakerSlug",
				element: <Speaker />,
			},
			{
				path: "chapters",
				element: <ChaptersPage />,
			},
			{
				path: "chapters/:chapterSlug",
				element: <ChapterPage />,
			},
			{
				path: "team",
				element: <TeamPage />,
			},
			{
				path: "activities",
				element: <ActivitiesPage />,
			},

			// {
			// 	path: "virtual",
			// 	element: <Phase />,
			// },
			// {
			// 	path: "team/:teamMemberSlug",
			// 	element: <TeamMember />,
			// },
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "sponsor-us",
				element: <SponsorUsPage />,
			},
			{
				path: "*",
				element: <HomePage />,
			},
		],
	},
	// {
	// 	path: "game",
	// 	element: (
	// 		<Suspense fallback={null}>
	// 			<ThreeExperience />
	// 		</Suspense>
	// 	),
	// },
]);

function App() {
const { chapterSlug } = useParams();
	const currentChapter = chapters.find((s) => s.slug === chapterSlug);
	useEffect(() => {
		const faviconMap = {
			"/": "/favicon-32x32.png",
			"cs": "/csicons.png",
			"wie": "/wie_icons.png",
			"sight": "/assets/cs.png",
			"ras": "/icon_ras.png",
			"aess": "/aessold.png",
			"iip": "/assets/cs.png",
		  };
		console.log('chapterSlug',chapterSlug)
		const currentChaptericon = chapters.find((s) => s.slug === chapterSlug);
		const favicon = document.querySelector("link[rel='icon']");
		if (favicon && currentChaptericon) {
		  favicon.href = faviconMap[chapterSlug] ; // Default favicon
		}else if (chapterSlug ==="undefined") {
			favicon.href = faviconMap[0] ;
		}
	  }, [chapterSlug]);
	return <RouterProvider router={router} />;
}

export default App;

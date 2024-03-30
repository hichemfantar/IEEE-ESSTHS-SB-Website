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
import TunisiaPage from "./app/pages/Tunisia.page.jsx";

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
	return <RouterProvider router={router} />;
}

export default App;

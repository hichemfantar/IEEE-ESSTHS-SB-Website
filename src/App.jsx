import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./app/components/AppLayout.jsx";
import ActivitiesPage from "./app/pages/Activities.page.jsx";
import ChapterPage from "./app/pages/Chapter.page.jsx";
import ChaptersPage from "./app/pages/Chapters.page.jsx";
import ContactPage from "./app/pages/Contact.page.jsx";
import HomePage from "./app/pages/Home.page.jsx";
import TeamPage from "./app/pages/Team.page.jsx";

const router = createBrowserRouter([
	{
		element: <AppLayout></AppLayout>,
		children: [
			{
				path: "/",
				element: <HomePage />,
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

			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "*",
				element: <HomePage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

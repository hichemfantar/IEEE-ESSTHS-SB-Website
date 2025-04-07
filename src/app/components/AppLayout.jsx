import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function AppLayout({ children }) {
	return (
		<>
			<div className="flex min-h-full flex-col">
				<Navigation />

				<main className="xflex container mx-auto flex-1 p-4 py-8 2xl:px-24">
					<div className="flex-1">
						{children}
						<Outlet />
					</div>
				</main>

				<Footer />
			</div>

			<Link to="https://www.facebook.com/essthsieee" target="_blank">
				<img
					src={"/assets/mosmos.png"}
					className={twMerge(
						"fixed top-20 h-24 rotate-45 object-contain transition hover:scale-110 md:right-0 md:top-auto md:bottom-24 md:-rotate-45"
					)}
					alt="mosmos mascot"
				/>
			</Link>
			<ScrollRestoration />
		</>
	);
}

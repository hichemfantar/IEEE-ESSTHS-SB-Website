import React from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";
import { SparrowSurvey } from "./Home.page";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ContactPage() {

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
		<div className="py-8 md:py-20 ">
			<ContactForm />

			{false && <SparrowSurvey />}
		</div>
	);
}

export function ContactForm({ title = "Contact us" }) {
	return (
		<section className="h-full py-8 lg:py-8 ">
			<div className="max-w-8xl mx-auto">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						Let us know what you need and we will get back to you in no time.
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 place-items-center md:grid-cols-2">
				{/* Contact Info Section */}
				<div className="flex flex-col text-center md:text-center">
					<h1 className="mb-4 text-3xl font-bold lg:text-4xl lg:font-extrabold">
						Reach out via Email
					</h1>
					<h1 className="mb-6 text-3xl font-semibold md:mb-12">
						essths@ieee.tn
					</h1>
					<h1 className="mb-4 text-3xl font-bold lg:text-4xl lg:font-extrabold">
						Or call us
					</h1>
					<h1 className="mb-4 text-3xl font-semibold lg:text-4xl">
						+216 56 479 019
					</h1>
				</div>

				{/* Google Maps Section */}
				<div className="flex w-full justify-center px-20">
					<iframe
						title="tsyp location"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12935.840417133557!2d10.5974361!3d35.8499818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a6826eca57b%3A0xf698bd059d8e2d13!2s%C3%89cole%20sup%C3%A9rieure%20des%20sciences%20et%20de%20la%20technologie%20de%20Hammam%20Sousse!5e0!3m2!1sen!2stn!4v1688595702507!5m2!1sen!2stn"
						className="aspect-video w-full rounded-2xl shadow-md"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>

			{false && (
				<div className="max-w-8xl mx-auto px-4 lg:px-4">
					<div className="mx-auto max-w-3xl rounded-2xl border-2 border-gray-50 p-4 shadow-md dark:border-gray-800 lg:p-8">
						<form>
							<div className="grid md:grid-cols-2 md:gap-8">
								<div className="mb-6">
									<label
										htmlFor="first_name"
										className="mb-2 block text-sm font-medium  dark:text-gray-300"
									>
										First name
									</label>
									<input
										required=""
										type="text"
										id="first_name"
										placeholder="John"
										className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
										defaultValue=""
									/>
								</div>
								<div className="mb-6">
									<label
										htmlFor="last_name"
										className="mb-2 block text-sm font-medium  dark:text-gray-300"
									>
										Last name
									</label>
									<input
										required=""
										type="text"
										id="last_name"
										placeholder="Doe"
										className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
										defaultValue=""
									/>
								</div>
							</div>
							<div className="mb-6">
								<label
									htmlFor="email"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									Email address
								</label>
								<input
									required=""
									type="email"
									id="email"
									placeholder="john.doe@company.com"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="subject"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									Subject
								</label>
								<input
									required=""
									type="text"
									id="subject"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									placeholder="Subject name"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="message"
									className="mb-2 block text-sm font-medium  dark:text-gray-400"
								>
									Message
								</label>
								<textarea
									required=""
									id="message"
									rows={4}
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									placeholder="Your message..."
									defaultValue={""}
								/>
							</div>

							{/* <p className="mb-6 text-sm text-gray-500">
						By submitting this form you agree to our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/terms-and-conditions/"
						>
							Terms &amp; conditions
						</a>{" "}
						and our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/privacy-policy/"
						>
							Privacy Policy
						</a>{" "}
						which explains how we may collect, use and disclose your
						personal information including to third parties.
					</p> */}
							<button
								className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white sm:w-auto"
								type="submit"
							>
								<span className="flex items-center justify-center">
									Send message
								</span>
							</button>
						</form>
					</div>
				</div>
			)}
		</section>
	);
}

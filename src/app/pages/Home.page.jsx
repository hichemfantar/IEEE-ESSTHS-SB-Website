import React, { useEffect, Suspense } from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LogoOnBlack from "../../assets/Logo on black.png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";
import TSYP2014 from "../../assets/tsyp-editions/tsyp-2014.jpg";
import TSYP2016 from "../../assets/tsyp-editions/tsyp-2016.jpg";
import TSYP2017 from "../../assets/tsyp-editions/tsyp-2017.jpg";
import TSYP2018 from "../../assets/tsyp-editions/tsyp-2018.png";
import TSYP2019 from "../../assets/tsyp-editions/tsyp-2019.jpg";
import TSYP2020 from "../../assets/tsyp-editions/tsyp-2020.jpg";
import TSYP2021 from "../../assets/tsyp-editions/tsyp-2021.jpg";
import mosmosetImage from "../../assets/ieee-essths/mosmoset.png";
import IeeeTunisia from "../../assets/ieee-tunisia.png";
import YpTunisia from "../../assets/yp-tunisia-section.png";
import essthsLogo from "../../assets/essths.png";
import IEEER8 from "../../assets/IEEE R8.svg";
import R8_SAC from "../../assets/R8_SAC.png";
import aess from "../../assets/aess.png";
import iesLogo from "../../assets/ies.png";
import IASLogo from "../../assets/ias-logo-shadowbg.png";
import TSYP2021Dark from "../../assets/tsyp-editions/tsyp-2021-dark.png";
import TSYP2022 from "../../assets/tsyp-editions/tsyp-2022.png";
import { Link } from "react-router-dom";
import ExCom from "../components/ExCom";
import ThreeExperience from "../components/ThreeExperience";
import { ScheduleOverview } from "../components/schedule/ScheduleList";
import Speakers from "../components/Speakers";
import { useMediaQuery } from "usehooks-ts";
import Chairs from "../components/Chairs";
import MultimediaDepartment from "../components/MultimediaDepartment";
import BusinessDepartment from "../components/BusinessDepartment";
import HrDepartment from "../components/HrDepartment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<div className="h-full">
			{false && matches && (
				<Suspense fallback={null}>
					<div className="hidden h-[40rem] overflow-auto rounded-2xl md:block md:h-[45rem]">
						<ThreeExperience />
					</div>
				</Suspense>
			)}

			<section className="grid grid-cols-12 items-center justify-center py-24 md:py-24">
				<div className="col-span-12 mx-auto">
					<h1 className="mb-8 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
						<span className="text-[#3a55b4] dark:text-[#4967d0]">IEEE</span>{" "}
						ESSTHS Student Branch
					</h1>
					<img
						src={mosmosetImage}
						className="mx-auto mb-2 h-56 object-contain drop-shadow-lg sm:h-52"
						alt="TSYP 11"
						loading="lazy"
					/>
					<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						Hammam Sousse, Tunisia, since 2021
					</h1>

					<div className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:mt-20">
						{[
							{
								title: "Members",
								value: "300",
							},
							{
								title: "Events",
								value: "200",
							},
							{
								title: "Awards",
								value: "15",
							},
							{
								title: "Partners",
								value: "5",
							},
							{
								title: "Officers",
								value: "40",
							},
						].map((e) => (
							<div className="flex flex-col gap-2">
								<h1 className="text-center text-xl font-bold tracking-tight lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									{e.value}
								</h1>
								<h1 className="text-center text-xl font-bold tracking-tight lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									{e.title}
								</h1>
							</div>
						))}
					</div>
				</div>
				{/* <div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
					Welcome to our Silicon Valley.
				</h1>
				<h1 className="mb-4 text-4xl font-medium tracking-tight   lg:mb-7 lg:text-start lg:text-2xl lg:font-extrabold lg:leading-none">
					IEEE Tunisian Students and Young Professionals in Conjunction with
					IEEE ESSTHS in Silicon Valley congress.
				</h1>
			</div> */}
			</section>

			{false && (
				<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
					<div className="col-span-6 mx-auto">
						<img
							src={LogoOnBlack || Logo}
							className={`mx-auto mb-8 hidden h-52 object-contain dark:block ${
								LogoOnBlack ? "" : "dark:invert"
							} sm:h-48`}
							alt="TSYP 11"
							loading="lazy"
						/>

						<img
							src={LightLogo}
							className="mx-auto h-56 object-contain dark:hidden sm:h-60"
							alt="TSYP 11"
							loading="lazy"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							About IEEE TSYP Congress.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							Tunisian Students and Young Professionals, is the annual congress
							that brings together IEEE members in Tunisia. We are talking about
							the 11th edition which is organized by IEEE ESSTHS SB. It is an
							excellent opportunity to discuss current and future challenges in
							science and engineering, to immerse in the IEEE national network
							and to exchange experiences.
						</h1>
					</div>
				</section>
			)}

			{false && (
				<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
					<div className="col-span-6 mx-auto md:order-last">
						<img
							src={IeeeTunisia}
							className="mx-auto h-52 object-contain sm:h-96"
							alt="TSYP 11"
							loading="lazy"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							About IEEE Tunisia Section.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							The IEEE Tunisian Section aims to disseminate IEEE activities to
							all corners of the country through educational and technical
							activities, networking of people, and developing technology and
							its applications for humanitarian challenges. The section supports
							chapters, special interest groups, student activities, and student
							awards. IEEE is anchored in the Tunisian engineering landscape
							with more than 43 Student Branches' spread over the different
							engineering schools, faculties and universities
						</h1>
						<div>
							<Link
								// type="button"
								to={"https://ieee.tn/"}
								target="_blank"
								rel="noreferrer"
								className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
							>
								{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
								<span className="">Learn more IEEE Tunisia Section</span>
								{/* </div> */}
							</Link>
						</div>
					</div>
				</section>
			)}

			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6 mx-auto">
					<img
						src={SBGroupPic}
						className="mx-auto h-56 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						About IEEE ESSTHS Student Branch.
					</h1>
					<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						IEEE ESSTHS Student Branch, founded in 2020, is home to more than
						280 members, making it the largest Student Branch in Sousse, and 7th
						in Tunisia Section. It encompasses 5 Technical Chapters: AESS, CS,
						IAS, PES, RAS, IES, and 2 Affinity Groups: SIGHT & WIE. We have had
						the honor of receiving more than 12 worldwide IEEE Awards across all
						fields through the dedication and commitment of each of our members.
					</h1>
					<div>
						<Link
							// type="button"
							to={"https://essths.rnu.tn/public/"}
							target="_blank"
							rel="noreferrer"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Learn more about ESSTHS</span>
							{/* </div> */}
						</Link>
					</div>
				</div>
			</section>

			<section className="py-8 md:py-20">
				<Chapters />
			</section>

			<section className="py-8 md:py-20">
				<PoweredBy />
			</section>

			{false && (
				<section className="py-8 md:py-20">
					<IEEEPartners />
				</section>
			)}

			{false && (
				<section className="py-8 md:py-20">
					<Speakers />
				</section>
			)}

			{/* <div className="hidden md:block">
				<ScheduleOverview />
			</div> */}

			<section className="py-8 md:py-12">
				<ExCom />
			</section>
			<section className="py-8 md:py-12">
				<Chairs />
			</section>

			<section className="py-8 md:py-12">
				<div className="mx-auto">
					<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Find us here.
					</h1>
					<iframe
						title="tsyp location"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12935.840417133557!2d10.5974361!3d35.8499818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a6826eca57b%3A0xf698bd059d8e2d13!2s%C3%89cole%20sup%C3%A9rieure%20des%20sciences%20et%20de%20la%20technologie%20de%20Hammam%20Sousse!5e0!3m2!1sen!2stn!4v1688595702507!5m2!1sen!2stn"
						className="w-full rounded-2xl shadow-md"
						height="500"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>
			{/* <SparrowSurvey /> */}
		</div>
	);
}

export function Chapters({
	title = "Our Chapters & Affinity Groups",
	isActivityMode = false,
}) {
	return (
		<div className="hadow-xl bbg-white rounded-2xl">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-12 flex items-center justify-center gap-3">
					{/* <FontAwesomeIcon icon={faGlobe} className="text-xl" /> */}
					<h2 className="text-center text-4xl font-bold">{title}</h2>
				</div>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="transition hover:scale-105">
						<Link
							target={isActivityMode ? "_blank" : "_self"}
							to={
								isActivityMode
									? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=440899279"
									: "/chapters/ras"
							}
						>
							<img
								className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#740f0f] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
								src={"/assets/ras.png"}
								alt="TSYP2022"
								loading="lazy"
							/>
						</Link>
						<h1 className="mt-4 text-center text-lg font-extrabold">RAS</h1>
					</div>
					<div className="transition hover:scale-105">
						<Link
							target={isActivityMode ? "_blank" : "_self"}
							to={
								isActivityMode
									? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=1163012429"
									: "/chapters/cs"
							}
						>
							<img
								className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#c65503] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
								src={"/assets/cs.png"}
								alt="TSYP2022"
								loading="lazy"
							/>
						</Link>
						<h1 className="mt-4 text-center text-lg font-extrabold">CS</h1>
					</div>
					{false && (
						<div className="transition hover:scale-105">
							<Link
								target={isActivityMode ? "_blank" : "_self"}
								to={
									isActivityMode
										? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=1095251413"
										: "/chapters/ias"
								}
							>
								<img
									className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#0e5b30] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
									src={"/assets/ias.png"}
									alt="TSYP2022"
									loading="lazy"
								/>
							</Link>
							<h1 className="mt-4 text-center text-lg font-extrabold">IAS</h1>
						</div>
					)}
					{false && (
						<div className="transition hover:scale-105">
							<Link
								target={isActivityMode ? "_blank" : "_self"}
								to={
									isActivityMode
										? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=136762747"
										: "/chapters/pes"
								}
							>
								<img
									className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#086200] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
									src={"/assets/pes.png"}
									alt="TSYP2022"
									loading="lazy"
								/>
							</Link>
							<h1 className="mt-4 text-center text-lg font-extrabold">PES</h1>
						</div>
					)}
					<div className="transition hover:scale-105">
						<Link
							target={isActivityMode ? "_blank" : "_self"}
							to={
								isActivityMode
									? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=1207037058"
									: "/chapters/aess"
							}
						>
							{" "}
							<img
								className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#d9e2e5] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
								src={"/assets/aess.png"}
								alt="TSYP2022"
								loading="lazy"
							/>
						</Link>
						<h1 className="mt-4 text-center text-lg font-extrabold">AESS</h1>
					</div>
					<div className="transition hover:scale-105">
						<Link
							target={isActivityMode ? "_blank" : "_self"}
							to={
								isActivityMode
									? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=24605412"
									: "/chapters/sight"
							}
						>
							<img
								className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#a14706] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
								src={"/assets/sight.png"}
								alt="TSYP2022"
								loading="lazy"
							/>
						</Link>
						<h1 className="mt-4 text-center text-lg font-extrabold">SIGHT</h1>
					</div>
					<div className="transition hover:scale-105">
						<Link
							target={isActivityMode ? "_blank" : "_self"}
							to={
								isActivityMode
									? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=1207037058"
									: "/chapters/wie"
							}
						>
							<img
								className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#4c1064] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
								src={"/assets/wie.png"}
								alt="TSYP2022"
								loading="lazy"
							/>
						</Link>
						<h1 className="mt-4 text-center text-lg font-extrabold">WIE</h1>
					</div>
					<div className="transition hover:scale-105">
						<Link
							target={isActivityMode ? "_blank" : "_self"}
							to={
								isActivityMode
									? "https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=1207037058"
									: "/chapters/iip"
							}
						>
							<img
								className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#fff] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
								src={"/assets/iip.jpg"}
								alt="TSYP2022"
								loading="lazy"
							/>
						</Link>
						<h1 className="mt-4 text-center text-lg font-extrabold">IIP</h1>
					</div>
					{false && (
						<div className="transition hover:scale-105">
							<Link to="#">
								<img
									className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#5093b2] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
									src={"/assets/cis.png"}
									alt="TSYP2022"
									loading="lazy"
								/>
							</Link>
							<h1 className="mt-4 text-center text-lg font-extrabold">CIS</h1>
						</div>
					)}
					{false && (
						<div className="transition hover:scale-105">
							<Link to="#">
								<img
									className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#ebebeb] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
									src={iesLogo}
									alt="TSYP2022"
									loading="lazy"
								/>
							</Link>
							<h1 className="mt-4 text-center text-lg font-extrabold">IES</h1>
						</div>
					)}
					{false && (
						<div className="transition hover:scale-105">
							<Link
								target="_blank"
								to="https://docs.google.com/spreadsheets/d/1nTX4tXHHvjP7tCk6qNjpUKkVSR4DClqlOsG0XR8aM2A/edit#gid=1771098931"
								className=""
							>
								<div className="col-span-2 mx-auto flex h-36 w-64 items-center justify-center rounded-2xl bg-[#ebebeb] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1">
									<FontAwesomeIcon icon={faGlobe} className="text-7xl" />
									{/* <img
								className="col-span-2 mx-auto h-36 w-64 rounded-2xl bg-[#ebebeb] object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1"
								src={iesLogo}
								alt="TSYP2022"
								loading="lazy"
							/> */}
								</div>
							</Link>
							<h1 className="mt-4 text-center text-lg font-extrabold">
								General
							</h1>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function PreviousEditions() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					Previous Editions
				</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2022/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2022}
								alt="TSYP2022"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2022</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2021/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2021Dark}
								alt="TSYP2021Dark"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2021</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2020/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-cover shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2020}
								alt="TSYP2020"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2020</h1>
					</div>

					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2019/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2019}
								alt="TSYP2019"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2019</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2018/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain p-4 shadow-md shadow-gray-200 transition dark:invert sm:col-start-2 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2018}
								alt="TSYP2018"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2018</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2017/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2017}
								alt="TSYP2017"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2017</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2016/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2016}
								alt="TSYP2016"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2016</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2015/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={IeeeTunisia}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2015</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2014/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-900 invert transition dark:invert-0 sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2014}
								alt="TSYP2014"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2014</h1>
					</div>
					<div className="transition hover:scale-105">
						<a href="#">
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={IeeeTunisia}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
								loading="lazy"
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2013</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

function PoweredBy() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">Our Partners</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<a
						href="https://www.satoripop.com/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/satoripop.png"}
							alt="satoripop"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://2btrading.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/2b.jpg"}
							alt="2betrading"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://gomycode.com/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/gmc.png"}
							alt="gomycode"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://www.pristiniaiuniversity.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/pristini.png"}
							alt="pristini"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="http://www.essths.rnu.tn/public/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/essths.png"}
							alt="essths"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://www.linkedin.com/company/rockets-space/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-8 shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"/assets/rockets_space_logo.jpg"}
							alt="essths"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

function IEEEPartners() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">IEEE Partners</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<a
						href="https://ieeer8.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={IEEER8}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://ieeer8.org/student-activities/sa-committee/sac/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] rounded-full object-contain shadow-md shadow-gray-200 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={R8_SAC}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://ieee-aess.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={aess}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
					<a
						href="https://ias.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[115px] w-[115px] object-contain transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={IASLogo}
							alt="Transistor"
							// width={200}
							// height={200}
							loading="lazy"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export function SparrowSurvey() {
	useEffect(() => {
		window.sparrowLaunch({
			/*add custom params here*/
		});

		return () => {};
	}, []);

	return (
		<div
			id="ss_survey_widget"
			className="h-[800px]!important mx-auto"
			style={{
				position: "relative",
				width: "100% !important",
				height: "1000px !important",
			}}
		></div>
	);
}

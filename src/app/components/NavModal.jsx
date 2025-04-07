import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import routes from "../routes";

export default function NavModal({ setToggleModal, toggleModal }) {
	return (
		<Transition.Root show={toggleModal} as={Fragment}>
			<Dialog
				as="div"
				className={twMerge("relative z-10 z-[999999999999]")}
				onClose={() => setToggleModal(false)}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-black dark:bg-opacity-75" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						{/* open from right */}
						{/* <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"> */}
						<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-20">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="-translate-x-full"
								// open from right
								// enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
								// open from right
								// leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										{/* open from right */}
										{/* <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"> */}
										<div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 sm:-mr-10 sm:pl-4">
											<button
												type="button"
												className="rounded-md text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
												onClick={() => setToggleModal(false)}
											>
												<span className="sr-only">Close panel</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div
										className={twMerge(
											"flex h-full flex-col overflow-y-auto bg-gray-50 py-6 shadow-xl dark:bg-black dark:bg-transparent dark:backdrop-blur-lg"
										)}
									>
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-lg font-bold">
												Navigation
											</Dialog.Title>
										</div>
										<div className="mt-6 flex-1 px-4 sm:px-6">
											{/* Replace with your content */}
											<div>
												<ul className="flex flex-col divide-y divide-gray-600">
													{routes.map((route) => (
														<li className="" key={route.title}>
															<NavLink
																className={({ isActive, isPending }) =>
																	twMerge(
																		"block w-full p-4 px-0 transition-all duration-75 hover:font-bold dark:text-gray-400 dark:hover:text-gray-200",
																		isActive
																			? "font-bold dark:text-gray-200"
																			: isPending
																			? ""
																			: ""
																	)
																}
																to={route.href}
																onClick={() => setToggleModal(false)}
															>
																{route.title}
															</NavLink>
														</li>
													))}
												</ul>
											</div>
											{/* /End replace */}
										</div>

										<div className="flex items-center justify-start">
											<div className="flex items-center gap-4 px-4 sm:px-6">
												<a
													href="https://www.facebook.com/essthsieee"
													target="_blank"
													rel="noreferrer"
													className="text-gray-600 dark:text-gray-400"
													aria-label="facebook page"
												>
													<FontAwesomeIcon icon={faFacebook} />
												</a>
												<a
													href="https://www.instagram.com/ieee.essths.student.branch/"
													target="_blank"
													rel="noreferrer"
													className="text-gray-600 dark:text-gray-400"
													aria-label="instagram page"
												>
													<FontAwesomeIcon icon={faInstagram} />
												</a>
												<a
													href="https://www.linkedin.com/in/ieee-essths-student-branch-58337b213/"
													target="_blank"
													rel="noreferrer"
													className="text-gray-600 dark:text-gray-400"
													aria-label="linkedin page"
												>
													<FontAwesomeIcon icon={faLinkedin} />
												</a>
												<a
													href="https://github.com/hichemfantar/IEEE-ESSTHS-SB-Website"
													target="_blank"
													rel="noreferrer"
													className="text-gray-600 dark:text-gray-400"
													aria-label="github"
												>
													<FontAwesomeIcon icon={faGithub} />
												</a>
											</div>
										</div>
										<div className="mt-2 px-4 text-start font-semibold sm:px-6">
											Designed by Hichem Fantar
											{/* <img src={signature} className="mr-3 h-8 dark:invert" alt="TSYP 11" /> */}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

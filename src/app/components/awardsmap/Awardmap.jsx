import { motion } from "framer-motion";
import "./Awardmap.css";

export function AwardsMap({ awards }) {
	return (
		<div className="relative mx-auto w-full px-20 py-10">
			{/* Vertical Timeline Line */}
			<div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300 dark:bg-gray-600"></div>

			{/* Awards List */}
			<div className="flex w-full flex-col gap-12">
				{awards.map((award, index) => (
					<motion.div
						key={index}
						className="relative flex items-center "
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						{/* Timeline Dot */}
						<div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500 dark:border-gray-900 "></div>

						{/* Horizontal Line Connecting Dot to Card */}
						<div
							className={`absolute top-1/2 h-[2px] w-[80px] bg-gray-400 dark:bg-gray-600 ${
								index % 2 === 0 ? "left-1/2" : "right-1/2"
							} z-0 -translate-y-1/2`}
						></div>

						{/* Award Card */}
						<div
							className={`relative w-full rounded-xl border-2 border-gray-300 bg-white p-5 shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 sm:w-full md:w-1/2  ${
								index % 2 === 0
									? "ml-auto pl-16 text-left "
									: "mr-auto pr-16 text-right"
							}`}
						>
							<div className="flex items-center gap-4">
								{/* Award Image */}
								<img
									src={award.urlimage}
									alt={award.name}
									className="h-40 w-60  rounded-md border border-gray-300 object-cover dark:border-gray-700"
								/>

								{/* Award Details */}
								<div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{award.name}
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{award.date}
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

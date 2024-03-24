export default function Chapter({ chapter }) {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">Meet the team</div>
			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{chapter?.team?.map((speaker) => (
					// <Link
					// 	key={speaker.name}
					// 	to={speaker.name}
					// 	className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
					// >
					<div
						key={speaker.name}
						className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
					>
						<img
							style={{
								objectPosition: "center top",
							}}
							src={speaker.imageSmall.url}
							alt=""
							className="mb-2 aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
							loading="lazy"
						/>
						<div className="font-bold">{speaker.name}</div>
						{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
						<div className="text-sm">
							{speaker.title}
							{false && `, ${speaker.company.name}`}
						</div>
					</div>
					// </Link>
				))}
			</div>
		</div>
	);
}

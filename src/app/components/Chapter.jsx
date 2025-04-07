export function Chapter({ chapter }) {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">Meet the team</div>
			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{chapter?.team?.map((speaker) => (
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
						<div className="text-sm">{speaker.title}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export function Events({ chapter }) {
	if (chapter?.events?.length === 0) return null;

	return (
		<div className="">
			<div className="mb-8 text-4xl font-bold">Events</div>
			<div className="not-prose">
				<div className="overflow-auto rounded-lg shadow-md">
					<table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
						<thead className="bg-white text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Title
								</th>
								<th scope="col" className="px-6 py-3">
									Date
								</th>
								<th scope="col" className="px-6 py-3">
									Report
								</th>
							</tr>
						</thead>
						<tbody>
							{chapter?.events?.map((event) => (
								<tr className="border-b bg-white last:border-b-0 dark:border-gray-700 dark:bg-gray-800">
									<td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
										{event["Event Title"]}
									</td>
									<td className="whitespace-nowrap px-6 py-4">
										{event["Event Date"]}
									</td>
									<td className="whitespace-nowrap px-6 py-4 line-clamp-1">
										<a
											href={event["Event URL"]}
											target="_blank"
											rel="noreferrer"
											className="underline"
										>
											{event["Event URL"]}
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

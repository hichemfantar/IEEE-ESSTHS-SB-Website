import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function ExpoListItem({ data, classNames, imgClassNames }) {
	return (
		<Link
			to={`/expo/${data.slug}`}
			className={twMerge(
				"block rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
				classNames
			)}
		>
			<div className="mb-4 rounded-lg bg-black p-6 py-8">
				<img
					loading="lazy"
					src={data.logo.url || data.logo}
					alt=""
					className={twMerge(
						"h-40 w-full object-contain md:h-40",
						imgClassNames
					)}
				/>
			</div>
			<div className="text-gray-600 line-clamp-4 dark:text-gray-300">
				{data.description}
			</div>
		</Link>
	);
}

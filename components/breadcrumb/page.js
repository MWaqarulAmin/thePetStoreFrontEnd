import Link from "next/link";

const Breadcrumb = ({ currentPage }) => {
	return (
		<nav className="flex items-center text-gray-500 text-sm">
			<Link
				href="/"
				className="text-gray-800 text-lg pl-24 mt-6"
			>
				Home
			</Link>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="4"
				stroke="currentColor"
				class="w-4 h-3 mt-6 mx-2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M8.25 4.5l7.5 7.5-7.5 7.5"
				/>
			</svg>

			<span className="text-gray-800 text-lg mt-6">{currentPage}</span>
		</nav>
	);
};

export default Breadcrumb;

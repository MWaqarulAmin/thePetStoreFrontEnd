// Experimental
"use client";
import { useRef } from "react";
import Image from "next/image";
import Breadcrumb from "../breadcrumb/page.js";
import { useEffect, useState } from "react";

export default function AlphabetPage() {
	const alphabets = "#ABCDEFGHIJKLMNOPRSTVWYZ";

	const [brands, setBrands] = useState([]);

	useEffect(() => {
		// Fetch data from the backend API
		fetch("http://localhost:3000/brands")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setBrands(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const containerRef = useRef(null);
	const filteredBrandsByAlphabet = alphabets.split("").map((alphabet) => {
		const filteredBrands = brands.filter((brand) => {
			if (alphabet === "#") {
				return /^\d/.test(brand.name);
			}
			return brand.name.charAt(0).toUpperCase() === alphabet;
		});
		return {
			alphabet,
			brands: filteredBrands,
		};
	});

	const scrollToLetter = (letter) => {
		const letterElement = document.getElementById(`letter-${letter}`);
		if (letterElement) {
			letterElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div>
			<Breadcrumb currentPage="Shop by Brands" />

			{/* Alphabets Row  */}
			<div className="text-xl font-bold space-x-2 text-center mt-14">
				{alphabets.split("").map((alphabet) => (
					<button
						key={alphabet}
						onClick={() => scrollToLetter(alphabet)}
						className="text-black hover:text-blue-500 focus:text-blue-500"
					>
						{alphabet}
					</button>
				))}
			</div>

			<div
				ref={containerRef}
				className="container mx-auto p-4"
			>
				{filteredBrandsByAlphabet.map(({ alphabet, brands }) => (
					<div
						key={alphabet}
						id={`letter-${alphabet}`}
						className="mb-8"
					>
						<div className="flex justify-center mt-10 mb-6">
							<hr className="w-11/12 border border-solid border-black border-t-0" />
						</div>
						<div className="ml-28 text-lg flex flex-col w-fit">
							<h2>{alphabet}</h2>
						</div>

						{/* Brands Image and Name Div */}
						<div className="flex flex-wrap">
							{brands.map((brand) => (
								<div
									key={brand.id}
									className="my-2 flex flex-wrap flex-col items-center ml-40"
								>
									<div className="w-48 h-full flex flex-wrap flex-row mb-2 justify-center">
										<Image
											src={`http://localhost:3000/${brand.imageUrl}`}
											alt={brand.name}
											width={200}
											height={200}
										/>
										<span className="text-xl text-black mt-8">
											{brand.name}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

// ---------------------------------------------------------------------------

// Oritinal

// "use client";
// import { useRef } from "react";
// import Image from "next/image";
// import brandData from "./brandData.js";
// import Breadcrumb from "../breadcrumb/page.js";
// import { useEffect, useState } from "react";

// export default function AlphabetPage() {

// 	const alphabets = "#ABCDEFGHIJKLMNOPRSTVWYZ";
// const containerRef = useRef(null); // Ref for the container element
// const filteredBrandsByAlphabet = alphabets.split("").map((alphabet) => {
// 	const filteredBrands = brandData.filter((brand) => {
// 		if (alphabet === "#") {
// 			return /^\d/.test(brand.name);
// 		}
// 		return brand.name.charAt(0).toUpperCase() === alphabet;
// 	});
// 	return {
// 		alphabet,
// 		brands: filteredBrands,
// 	};
// });

// 	const scrollToLetter = (letter) => {
// 		const letterElement = document.getElementById(`letter-${letter}`);
// 		if (letterElement) {
// 			letterElement.scrollIntoView({ behavior: "smooth" });
// 		}
// 	};

// 	return (
// 		<div>
// 			<Breadcrumb currentPage="Shop by Brands" />

// 			{/* Alphabets Row */}
// <div className="text-xl font-bold space-x-2 text-center mt-14">
// 	{alphabets.split("").map((alphabet) => (
// 		<button
// 			key={alphabet}
// 			onClick={() => scrollToLetter(alphabet)}
// 			className="text-black hover:text-blue-500 focus:text-blue-500"
// 		>
// 			{alphabet}
// 		</button>
// 	))}
// </div>

// 			<div
// 				ref={containerRef}
// 				className="container mx-auto p-4"
// 			>
// 				{filteredBrandsByAlphabet.map(({ alphabet, brands }) => (
// 					<div
// 						key={alphabet}
// 						id={`letter-${alphabet}`}
// 						className="mb-8"
// 					>
// 						<div className="flex justify-center mt-10 mb-6">
// 							<hr className="w-11/12 border border-solid border-black border-t-0" />
// 						</div>
// 						<div className="ml-28 text-lg flex flex-col w-fit">
// 							<h2>{alphabet}</h2>
// 						</div>

// 						{/* Brands Image and Name Div */}
// 						<div className="flex flex-wrap">
// 							{brands.map((brand) => (
// 								<div
// 									key={brand.id}
// 									className="my-2 flex flex-wrap flex-col items-center ml-40"
// 								>
// 									<div className="w-48 h-full flex flex-wrap flex-row mb-2 justify-center">
// 										<Image
// 											src={brand.image}
// 											alt={brand.name}
// 											width={200}
// 											height={200}
// 											className=""
// 										/>
// 										<span  className="text-xl text-black mt-8">
// 											{brand.name}
// 										</span>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// ------------------------------------------------------------------------------------------
// working api

// const AlphabetPage = () => {
// 	const [brands, setBrands] = useState([]);

// 	useEffect(() => {
// Fetch data from the backend API

// 		fetch("http://localhost:3000/brands")
// 			.then((response) => response.json())
// 			.then((data) => setBrands(data))
// 			.catch((error) => {
// 				console.error("Error fetching data:", error);
// 			});
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Brands List</h1>
// 			<ul>
// 				{brands.map((brand) => (
// 					<li key={brand.id}>{brand.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default AlphabetPage;

// ------------------------------------------------------------------------------------------

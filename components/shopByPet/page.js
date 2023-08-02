"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShopByPet() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/pets")
			.then((response) => response.json())
			.then((data) => setPets(data))
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<>
			<p className=" text-3xl font-semibold ml-20">Shop by Pet</p>

			<div class="bg-white">
				<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl ml-12 lg:py-0">
					{/* ------------------------------------------------------------ */}

					<div
						class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 
											lg:grid-cols-3 xl:gap-x-44 "
					>
						{pets.map((pet) => (
							<div>
								<Link href={`/shopByPetPage/${pet._id}`}>
									{/* Replace "pet" with the actual route for the individual pet page */}

									<div
										key={pet._id}
										class="min-h-80 aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden 
														rounded-md
              							lg:aspect-none cursor-pointer"
									>
										<Image
											// src={`http://localhost:3000/${pet.imageUrl}`}
											src={`http://localhost:3000/${pet.imageUrl}`} // Use absolute URL
											alt={pet.name}
											width={437}
											height={355}
										/>
									</div>
								</Link>
							</div>
						))}
					</div>

					{/* ========================================================================== */}

					{/* <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-44 ">
						{pets.map((pet) => (
							<div>
								<div key={pet._id}>
									<div
										key={pet._id}
										class="min-h-80 aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden rounded-md
											lg:aspect-none cursor-pointer"
									>
										<Image
											src={`http://localhost:3000/${pet.imageUrl}`}
											alt={pet.name}
											width={437}
											height={355}
										/>
									</div>
								</div>
							</div>
						))}
					</div> */}
				</div>
			</div>
		</>
	);
}

// =======================================================================================

// Functions api

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const ShopByPet = () => {
// 	const [pets, setPets] = useState([]);

// 	useEffect(() => {
// 		// Fetch data from the backend API
// 		fetch("http://localhost:3000/pets")
// 			.then((response) => response.json())
// 			.then((data) => setPets(data))
// 			.catch((error) => {
// 				console.error("Error fetching data:", error);
// 			});
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Pets List</h1>
// 			<ul>
// 				{pets.map((pet) => (
// 					<li key={pet._id}>
// 						{/* {pet.name} */}
// 						<Image
// 							src={`http://localhost:3000/${pet.imageUrl}`}
// 							alt={pet.name}
// 							width={400}
// 							height={600}

// 						/>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default ShopByPet;

// ------------------------------------------------------------------------

// First version Original

// import Image from "next/image";
// import shopDog from "public/images/shopDog.png";
// import shopCat from "public/images/shopCat.png";
// import shopFish from "public/images/shopFish.png";
// import shopSmallPet from "public/images/shopSmallPet.png";
// import shopBird from "public/images/shopBird.png";
// import shopReptile from "public/images/shopReptile.png";

// export default function ShopByPet() {
// 	return (
// 		<>
// 			<p className=" text-3xl font-semibold ml-20">Shop by Pet</p>

// 			<div class="bg-white">
// 				<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl ml-12 lg:py-0">
// 					<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-44">
// 						{/* categories */}

// 						<div class="group ">
// 							<div
// 								class="min-h-80  aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden rounded-md
// 											lg:aspect-none group-hover:opacity-75 "
// 							>
// 								<Image
// 									src={shopDog}
// 									alt="shop dog"
// 									class="h-full w-full object-cover cursor-pointer object-center lg:h-full lg:w-full"
// 								/>
// 							</div>
// 						</div>

// 						<div class="group">
// 							<div
// 								class="min-h-80  aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden rounded-md
// 											lg:aspect-none group-hover:opacity-75 "
// 							>
// 								<Image
// 									src={shopCat}
// 									alt="shop cat"
// 									class="h-full w-full cursor-pointer object-cover object-center lg:h-full lg:w-full"
// 								/>
// 							</div>
// 						</div>

// 						<div class="group">
// 							<div
// 								class="min-h-80  aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden rounded-md
// 											lg:aspect-none group-hover:opacity-75 "
// 							>
// 								<Image
// 									src={shopFish}
// 									alt="shop fish"
// 									class="h-full w-full cursor-pointer object-cover object-center lg:h-full lg:w-full"
// 								/>
// 							</div>
// 						</div>

// 						<div class="group">
// 							<div
// 								class="min-h-80  aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden rounded-md
// 											lg:aspect-none group-hover:opacity-75 "
// 							>
// 								<Image
// 									src={shopSmallPet}
// 									alt="shop small pet"
// 									class="h-full w-full cursor-pointer object-cover object-center lg:h-full lg:w-full"
// 								/>
// 							</div>
// 						</div>

// 						<div class="group">
// 							<div
// 								class="min-h-80  aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden rounded-md
// 											lg:aspect-none group-hover:opacity-75 "
// 							>
// 								<Image
// 									src={shopBird}
// 									alt="shop bird"
// 									class="h-full w-full cursor-pointer object-cover object-center lg:h-full lg:w-full"
// 								/>
// 							</div>
// 						</div>

// 						<div class="group">
// 							<div
// 								class="min-h-80  aspect-h-1 aspect-w-1 w-437 lg:h-355 overflow-hidden rounded-md
// 											lg:aspect-none group-hover:opacity-75 "
// 							>
// 								<Image
// 									src={shopReptile}
// 									alt="shop reptile"
// 									class="h-full w-full cursor-pointer object-cover object-center lg:h-full lg:w-full"
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

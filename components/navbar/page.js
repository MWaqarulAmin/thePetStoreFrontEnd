import Image from "next/image";
import logo from "public/images/logo.png";
import shippingTruck from "public/images/shippingTruck.png";
import accountIcon from "public/images/accountIcon.png";
import cart from "public/images/cart.png";
import Link from "next/link";

export const Navbar = () => {
	return (
		<>
			{/* first nav bar */}

			<nav className="bg-teal-500 shadow-2xl shadow-black h-11 lg:h-24 w-full ">
				<div className="container mx-auto flex  items-center py-2">
					<div className="flex items-center ml-16">
						<Image
							src={logo}
							alt="Logo"
							width={120}
							height={82}
						/>
					</div>
					<div className="flex ml-72">
						<form className="relative">
							<div className="relative">
								<input
									type="text"
									placeholder="Search"
									className="bg-white text-white rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 w-128 h-12 text-sm"
								/>
								<button
									className="absolute top-0 right-0 bg-yellow-400 h-9 flex items-center 
										rounded-r bg-primary mr-2 mt-1.5 px-2 py-0 text-xs  rounded
										font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out 
										hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none
										focus:ring-0 active:bg-primary-800 active:shadow-lg"
									type="button"
									id="button-addon1"
									data-te-ripple-init
									data-te-ripple-color="light"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="h-5 w-5"
									>
										<path
											fill-rule="evenodd"
											d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
					<div className="flex items-center ml-20 text-xl font-bold">
						<a
							href="#"
							className="text-white p-0 w-max"
						>
							Need Help?
						</a>
						<p className="text-white ml-8 mr-4 font-extralight">|</p>
						<a
							href="#"
							className="text-white p-2 flex"
						>
							<Image
								src={accountIcon}
								alt="account icon"
								className="w-6 h-6 mr-2"
							/>
							Account
						</a>
						<p className="text-white ml-5 mr-6 font-extralight">|</p>
						<a
							href="#"
							className="text-white p-2"
						>
							<Image
								src={cart}
								alt="shipping cart"
								className="w-6 h-6"
							/>
						</a>
					</div>
				</div>
			</nav>

			{/* Second Row of Nav Bar */}
			<nav className="sticky top-0 z-50 bg-teal-500 py-4  h-11 lg:h-20 w-auto">
				<div className="container mx-auto flex justify-start text-xl font-bold">
					<a
						href="#"
						className=" flex text-white px-4 py-2 ml-16 hover:bg-teal-600 hover:w-50"
					>
						Shop by Pet
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							text-gray-500
							fill="currentColor"
							class="w-6 h-6 text-yellow-500 ml-2 mt-0.5"
							stroke="currentColor"
							stroke-width="1"
						>
							<path
								fill-rule="evenodd"
								d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<Link
						href="shopByBrandPage"
						className="text-white px-4 py-2 ml-14 hover:bg-teal-600 hover:w-50"
					>
						Shop by Brand
					</Link>
					<a
						href="#"
						className="text-white px-4 py-2 ml-14 hover:bg-teal-600 hover:w-50"
					>
						New Arrivals
					</a>
					<a
						href="#"
						className="text-white px-4 py-2 ml-14 hover:bg-teal-600 hover:w-50"
					>
						Offers
					</a>
					<a
						href="#"
						className="flex text-white px-4 py-2 ml-14 hover:bg-teal-600 hover:w-50"
					>
						Services
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							text-gray-500
							fill="currentColor"
							class="w-6 h-6 text-yellow-500 ml-2 mt-0.5"
							stroke="currentColor"
							stroke-width="1"
						>
							<path
								fill-rule="evenodd"
								d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="#"
						className="flex text-yellow-500 px-4 py-2 ml-16"
					>
						FREE DELIVERY OVER AED100!
						<Image
							src={shippingTruck}
							alt="shipping truck"
							className="w-8 h-6 ml-1 mt-0.5"
						/>
					</a>
				</div>
			</nav>
		</>
	);
};

import Image from "next/image";
import logo from "public/images/logo.png";
import facebook from "public/images/facebook.svg";
import instagram from "public/images/instagram.svg";

export default function Footer() {
	return (
		<footer class="bottom-0 left-0 w-full bg-gray-900">
			<div class=" p-0 py-0 lg:py-0 lg:px-0">
				<div class="md:flex">
					{/* Contact Us Section */}

					<div class="mb-0 md:mb-0 bg-gray-800 w-96 pt-20 pl-24 pb-20">
						<h2 className="text-yellow-500 text-base font-bold mb-6">
							Contact Us
						</h2>
						<a
							href="https://flowbite.com/"
							class="flex items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4 text-yellow-500"
							>
								<path
									fill-rule="evenodd"
									d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
									clip-rule="evenodd"
								/>
							</svg>
							<p className="text-white text-sm ml-4 hover:text-yellow-500">
								800-PETSTORE (73878673)
							</p>
						</a>
						<a
							href="https://flowbite.com/"
							className="flex items-center mb-8 mt-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4 text-yellow-500"
							>
								<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
								<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
							</svg>
							<p className="text-white text-sm ml-4 hover:text-yellow-500">
								info@thepetstore.ae
							</p>
						</a>
						<Image
							src={logo}
							alt="logo image"
							width={120}
							height={91}
						/>
					</div>

					{/* shopping with us section */}

					<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 pt-20">
						<div className="ml-16">
							<h2 className="text-yellow-500 text-base font-bold">
								Shopping with US
							</h2>
							<ul class="   text-white text-sm mt-4  ">
								<li class="mb-2">
									<a
										href="https://flowbite.com/"
										class="hover:text-yellow-500"
									>
										Delivery Policy
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://tailwindcss.com/"
										class="hover:text-yellow-500"
									>
										Returns & Exchange
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://tailwindcss.com/"
										class="hover:text-yellow-500"
									>
										Orders Policy
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://tailwindcss.com/"
										class="hover:text-yellow-500"
									>
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
						<div className="ml-12">
							<h2 className="text-yellow-500 text-base font-bold">
								Categories
							</h2>
							<ul class="text-white text-sm mt-4">
								<li class="mb-2">
									<a
										href="https://github.com/themesberg/flowbite"
										class="hover:text-yellow-500 "
									>
										Dog Supplies
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://discord.gg/4eeurUVvTy"
										class="hover:text-yellow-500"
									>
										Cat Supplies
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://discord.gg/4eeurUVvTy"
										class="hover:text-yellow-500"
									>
										Bird Supplies
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://discord.gg/4eeurUVvTy"
										class="hover:text-yellow-500"
									>
										Small Pet Supplies
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://discord.gg/4eeurUVvTy"
										class="hover:text-yellow-500"
									>
										Fish Supplies
									</a>
								</li>
								<li class="mb-2">
									<a
										href="https://discord.gg/4eeurUVvTy"
										class="hover:text-yellow-500"
									>
										Reptiles Supplies
									</a>
								</li>
							</ul>
						</div>
						<div className="ml-6">
							<h2 className="text-yellow-500 text-base font-bold">
								My Account
							</h2>
							<ul class="text-white text-sm mt-4">
								<li class="mb-2">
									<a
										href="#"
										class="hover:text-yellow-500"
									>
										My Orders
									</a>
								</li>
								<li class="mb-2">
									<a
										href="#"
										class="hover:text-yellow-500"
									>
										Address Book
									</a>
								</li>
								<li class="mb-2">
									<a
										href="#"
										class="hover:text-yellow-500"
									>
										Account information
									</a>
								</li>
								<li class="mb-2">
									<a
										href="#"
										class="hover:text-yellow-500"
									>
										Login/Register
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* our stores section */}

					<div className="ml-6">
						<h2 className="text-yellow-500 text-base font-bold pt-20">
							Our Stores
						</h2>
						<ul class="text-white text-sm mt-4">
							<li class="mb-2">
								<a
									href="#"
									class="hover:text-yellow-500"
								>
									Serena Marketplace
								</a>
							</li>
						</ul>
					</div>

					{/* connect with us section */}

					<div className="ml-20">
						<h2 className="text-yellow-500 text-base font-bold pt-20">
							Connect with Us
						</h2>
						<ul class="text-yellow-500 text-sm mt-4">
							<li class="mb-2">
								<div className="flex">
									<Image
										src={facebook}
										alt="facebook logo"
										width={14}
										height={14}
										className="mr-4"
									/>
									<a
										href="#"
										class="hover:text-white"
									>
										Facebook
									</a>
								</div>
							</li>
							<li class="mb-2">
								<div className="flex">
									<Image
										src={instagram}
										alt="instagram logo"
										width={22}
										height={22}
										className="mr-2"
									/>
									<a
										href="#"
										class="hover:text-white"
									>
										Instagram
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* footer bottom section */}

				<div class="text-center bg-teal-500 py-3">
					<span class="text-sm text-white text-center">
						Copyright © 2023 The Pet Store. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
	);
}

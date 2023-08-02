import Image from "next/image";
import dogFood from "public/images/dogFood.png";
import catFood from "public/images/catFood.jpg";
import treats from "public/images/treats.jpg";
import catLitter from "public/images/catLitter.jpg";
import toys from "public/images/toys.jpg";
import fleaAndTick from "public/images/fleaAndTick.jpg";
import healthCare from "public/images/healthCare.jpg";
import grooming from "public/images/grooming.jpg";
import bowls from "public/images/bowls.jpg";
import beds from "public/images/beds.jpg";
import leashes from "public/images/leashes.jpg";
import dogTraining from "public/images/dogTraining.jpg";

export default function CustomerFavorites() {
	return (
		<>
			<p className="mt-10 text-3xl font-semibold ml-20">Customer Favorites</p>
			<div className="text-center text-lg text-slate-600 font-semibold">
				{/* first row */}
				<div className="flex ml-24 gap-6 mt-1">
					<div className=" ">
						<Image
							src={dogFood}
							width={203}
							height={214}
						/>
						<p className="mt-8">Dog Food</p>
					</div>
					<div className="">
						<Image
							src={catFood}
							width={203}
							height={214}
						/>
						<p className="mt-6">Cat Food</p>
					</div>
					<div className="">
						<Image
							src={treats}
							width={203}
							height={214}
						/>
						<p className="mt-6">Treats</p>
					</div>
					<div className="">
						<Image
							src={catLitter}
							width={203}
							height={214}
						/>
						<p className="mt-6">Cat Litter & Accessories</p>
					</div>
					<div className="">
						<Image
							src={toys}
							width={203}
							height={214}
						/>
						<p className="mt-6">Toys</p>
					</div>
					<div className="">
						<Image
							src={fleaAndTick}
							width={203}
							height={214}
						/>
						<p className="mt-6">Flea & Tick</p>
					</div>
				</div>
				{/* second row */}
				<div className="flex ml-24 mt-4 gap-6">
					<div className=" ">
						<Image
							src={healthCare}
							width={203}
							height={214}
						/>
						<p className="mt-16">Health Care</p>
					</div>
					<div className=" ">
						<Image
							src={grooming}
							width={203}
							height={214}
						/>
						<p className="mt-6">Grooming</p>
					</div>
					<div className=" ">
						<Image
							src={bowls}
							width={203}
							height={214}
						/>
						<p className="mt-6">Bowls</p>
					</div>
					<div className=" ">
						<Image
							src={beds}
							width={203}
							height={214}
						/>
						<p className="mt-6">Beds</p>
					</div>
					<div className=" ">
						<Image
							src={leashes}
							width={203}
							height={214}
						/>
						<p className="mt-6">Leashes & Collars</p>
					</div>
					<div className=" ">
						<Image
							src={dogTraining}
							width={203}
							height={214}
						/>
						<p className="mt-6">Dog Training & Behavior</p>
					</div>
				</div>
			</div>
		</>
	);
}

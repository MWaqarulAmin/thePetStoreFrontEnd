"use client";
import Image from "next/image";
import brand1 from "public/images/brand1.jpeg";
import brand2 from "public/images/brand2.png";
import brand3 from "public/images/brand3.png";
import brand4 from "public/images/brand4.png";
import brand5 from "public/images/brand5.png";
import brand6 from "public/images/brand6.png";
import brand7 from "public/images/brand7.png";
import brand8 from "public/images/brand8.png";
import brand9 from "public/images/brand9.png";
import brand10 from "public/images/brand10.png";
import brand11 from "public/images/brand11.png";
import brand12 from "public/images/brand12.png";
import brand13 from "public/images/brand13.png";
import brand14 from "public/images/brand14.png";
import brand15 from "public/images/brand15.jpeg";
import brand16 from "public/images/brand16.png";
import brand17 from "public/images/brand17.png";
import brand18 from "public/images/brand18.png";
import brand19 from "public/images/brand19.png";
import brand20 from "public/images/brand20.png";
import brand21 from "public/images/brand21.png";
import brand22 from "public/images/brand22.png";
import brand23 from "public/images/brand23.jpeg";
import brand24 from "public/images/brand24.jpeg";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class BrandsInStock extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}

	render() {
		const settings = {
			dots: false,
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			autoplay: true,
			speed: 2000,
			autoplaySpeed: 500,
			cssEase: "linear",
			pauseOnHover: true,
			focusOnSelect: true,
		};
		return (
			<div>
				<div className="flex mt-6">
					<p className=" text-lg font-bold ml-20 mt-1">100 + Brands in Stock</p>
					<button class="bg-yellow-500 hover:text-white text-black font-semibold py-2 px-9 ml-6 rounded">
						Shop All
					</button>
				</div>
				<div className="flex float-right mr-14">
					<div class="icon-container border rounded-sm mr-1 border-yellow-500 flex justify-center items-center w-8 h-8">
						<button onClick={this.previous}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-yellow-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
					</div>
					<div class="icon-container border rounded-sm border-yellow-500 flex justify-center items-center w-8 h-8">
						<button onClick={this.next}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-yellow-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* <div class="icon-container border border-black flex justify-center items-center w-8 h-8">
  
</div> */}

				{/* slides */}
				<div className="my-10 mx-20">
					<Slider
						ref={(c) => (this.slider = c)}
						{...settings}
					>
						<div key={1}>
							<Image
								src={brand1}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={2}>
							<Image
								src={brand2}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={3}>
							<Image
								src={brand3}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={4}>
							<Image
								src={brand4}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={5}>
							<Image
								src={brand5}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={6}>
							<Image
								src={brand6}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={7}>
							<Image
								src={brand7}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={8}>
							<Image
								src={brand8}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={9}>
							<Image
								src={brand9}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={10}>
							<Image
								src={brand10}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={11}>
							<Image
								src={brand11}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={12}>
							<Image
								src={brand12}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={13}>
							<Image
								src={brand13}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={14}>
							<Image
								src={brand14}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={15}>
							<Image
								src={brand15}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={16}>
							<Image
								src={brand16}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={17}>
							<Image
								src={brand17}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={18}>
							<Image
								src={brand18}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={19}>
							<Image
								src={brand19}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={20}>
							<Image
								src={brand20}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={21}>
							<Image
								src={brand21}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={22}>
							<Image
								src={brand22}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={23}>
							<Image
								src={brand23}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
						<div key={24}>
							<Image
								src={brand24}
								width={128}
								height={100}
								className="mr-4 cursor-pointer "
							/>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}

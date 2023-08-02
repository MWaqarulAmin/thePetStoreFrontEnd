"use client";
import Image from "next/image";
import styles from ".//page.module.css";
import React, { useState } from "react";
import banner1 from "public/images/banner1.webp";
import banner2 from "public/images/banner2.webp";

const images = [banner1, banner2];

const delay = 2500;

export default function Carousel() {
	const [index, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === images.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<div className={styles.slideshow}>
			<div
				className={styles.slideshowSlider}
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{images.map((image, index) => (
					<div
						key={index}
						className={styles.slide}
					>
						<Image src={image} />
					</div>
				))}
			</div>

			<div className={styles.slideshowDots}>
				{images.map((_, idx) => (
					<div
						key={idx}
						className={`${styles.slideshowDot}${
							index === idx ? ` ${styles.active}` : ""
						}`}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</div>
	);
}

"use client";
import { useState } from "react";
import React from "react";
import styles from ".//page.module.css";

const BackToTop = () => {
	const [position, setPosition] = React.useState({ top: 0, left: 0 });
	React.useEffect(() => {
		window.scroll({
			top: position.top,
			left: position.left,
			behavior: "smooth",
		});
	});

	const [visibility, setVisibility] = React.useState(false);
	const scrollTop = React.useRef();
	React.useEffect(() => {
		window.addEventListener("scroll", (e) => {
			window.scrollY > 200
				? (scrollTop.current.style.display = "inline-block")
				: (scrollTop.current.style.display = "none");
		});
	});

	return (
		<>
			<span
				onClick={() =>
					setPosition({ ...position, position: { top: 0, left: 0 } })
				}
				className={styles.circle}
				ref={scrollTop}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
					class="w-6 h-6 text-center"
				>
					<path
						fill-rule="evenodd"
						d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		</>
	);
};

export default BackToTop;

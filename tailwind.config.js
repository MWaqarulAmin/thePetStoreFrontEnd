/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1.5rem",
			},
			colors: {
				"teal-500": "#02a6b2",
				"yellow-500": "#fabe07",
				"gray-900": "#373637",
				"gray-800": "#2C2C2C",
				"teal-600": "#0696A1",
			},
			width: {
				128: "32rem",
				437: "437px",
				355: "355px",
			},
			// secondRow: {
			// 	top: "0",
			// 	zIndex: "999",
			// 	position: "-webkit-sticky",
			// 	position: "sticky",
			// },
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};

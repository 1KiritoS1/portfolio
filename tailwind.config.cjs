/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
		screens: {
			xs: "480px",
			sm: '640px',
			md: '768px',
			lg: '1024px',
		},
	},
	plugins: [],
}
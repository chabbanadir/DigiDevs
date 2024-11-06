/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1F2A44',         // Dark Blue
				secondary: '#3A6EA5',       // Light Blue
				accent: '#1DA1F2',          // Electric Blue
				neutral: '#F2F2F2',         // Off-White
				'dark-gray': '#333333',     // Dark Gray
				'light-gray': '#A9A9A9',    // Light Gray
			  },
		},
	},
	plugins: [],
}

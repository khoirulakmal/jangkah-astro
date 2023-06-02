/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  'raleway': ['Raleway', 'sans-serif'],
		  'tangerine': ['Tangerine', 'cursive'],
		},
		extend: {
		  colors: {
			'brown': '#693305' 
		  },
		},
	  },
	  plugins: [],
}

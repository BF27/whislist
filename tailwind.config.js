/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				'shadow-box': '3px 3px 0px 0px rgba(0,0,0,1)'
			}
		}
	},
	plugins: []
};

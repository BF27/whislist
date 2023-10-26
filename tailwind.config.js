/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				body: '#F4D738',
				accent: '#FF00F5',
				primary: '#7DF9FF',
				secondary: '#FFA07A',
			},
			boxShadow: {
				'box': '3px 4px 0px 0px rgba(0,0,0,1)'
			}
		}
	},
	plugins: []
};

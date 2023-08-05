/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: '#4B6E9B',
				bg: '#1A1A1A',
				secondary: '#E0A64B',
				accent: '#00CC66 ',
				text: '#F5F5F5',
				roweven: ': #30435E '
			}
		}
	}
};

module.exports = config;

const defaultTheme = require('tailwindcss/defaultTheme');
// TODO: clam font sizes
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
				oswald: ['Oswald']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};

module.exports = config;

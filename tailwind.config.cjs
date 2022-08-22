const defaultTheme = require('tailwindcss/defaultTheme');
// TODO: clam font sizes
// https://github.com/tailwindlabs/tailwindcss/discussions/4796
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

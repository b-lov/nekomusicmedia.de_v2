const defaultTheme = require('tailwindcss/defaultTheme');
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
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;

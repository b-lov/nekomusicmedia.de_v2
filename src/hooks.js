import { detectLocale } from '$i18n/i18n-util';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';

/** @param {string} locale */
const htmlLanguageAttributeReplacer =
	(locale) =>
	/** @param { {html: string} } input */
	({ html }) =>
		html.replace('<html lang="en">', `<html lang="${locale}">`);

/** @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
	// read language slug
	const [, lang] = event.url.pathname.split('/');
	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: htmlLanguageAttributeReplacer(lang) });
};

/** @type { (event: import('@sveltejs/kit').RequestEvent) => Record<string, string> } */
const getHeaders = (event) => {
	/** @type { Record<string, string> } */
	const headers = {};
	event.request.headers.forEach((value, key) => (headers[key] = value));
	return headers;
};

/** @type { import('@sveltejs/kit').GetSession } */
export const getSession = (event) => {
	// detect the preferred language the user has configured in his browser
	return { locale: detectLocale(initAcceptLanguageHeaderDetector({ headers: getHeaders(event) })) };
};

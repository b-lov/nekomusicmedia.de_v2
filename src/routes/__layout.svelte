<script context="module">
	import { replaceLocaleInUrl } from '../utils';
	import { locales, baseLocale } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';

	/** @type { import('@sveltejs/kit').Load } */
	export const load = async ({ url, params, session }) => {
		const lang =
			/** @type { import('$i18n/i18n-types').Locales } */
			('de');
		// (params.lang || url.pathname.split('/')[1]);

		// redirect to preferred language if user comes from page root
		if (url.pathname === '/') {
			return {
				status: 302,
				redirect: lang
				// redirect: `/${session.locale}`
			};
		}

		// redirect to base locale if language is not present
		if (!locales.includes(lang)) {
			return {
				status: 302,
				redirect: replaceLocaleInUrl(url.pathname, baseLocale)
			};
		}

		delete session.locale;

		await loadLocaleAsync(lang);

		return { props: { locale: lang } };
	};
</script>

<script>
	import { setLocale } from '$i18n/i18n-svelte';

	export let locale;
	setLocale(locale);
</script>

<slot />

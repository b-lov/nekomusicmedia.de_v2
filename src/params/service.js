import LL from '$i18n/i18n-svelte';
import { get } from 'svelte/store';

const services = Object.keys(get(LL).services.all);

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(service) {
	return services.includes(service);
}

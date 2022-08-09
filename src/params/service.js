/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(service) {
	return ['sound', 'light', 'video', 'stage', 'presentation', 'service'].includes(service);
}

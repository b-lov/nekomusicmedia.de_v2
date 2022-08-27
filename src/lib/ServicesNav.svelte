<script context="module">
	import { writable } from 'svelte/store';
	import { slide, fly } from 'svelte/transition';
	export const servicesNavOpen = writable(false);
</script>

<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';

	const services =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['services']['all']>} */
		(Object.keys($LL.services.all));
</script>

{#if $servicesNavOpen}
	<nav
		transition:slide
		class="flex flex-col absolute bg-white border items-stretch left-1/2 -translate-x-1/2 top-10 shadow-lg"
	>
		{#each services as service}
			<a
				href="/{$locale}/services/{service}"
				class="relative p-4 font-oswald text-lg uppercase text-gray-800 link-underline text-center"
				class:active={$page.url.pathname.includes(`/${$locale}/services/${service}`)}
			>
				{$LL.services.all[service].title()}</a
			>
		{/each}
	</nav>
{/if}

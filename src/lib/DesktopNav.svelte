<script>
	import { page } from '$app/stores';
	import { LL, locale } from '$i18n/i18n-svelte';
	import ServicesNav from './ServicesNav.svelte';
	import { servicesNavOpen } from './ServicesNav.svelte';

	/** @type { Array.<keyof Pick<import('$i18n/i18n-types').Translation, 'about' | 'services' | 'contact'>> } */
	const links = ['about', 'services', 'contact'];
</script>

<nav class="hidden sm:flex">
	{#each links as link}
		<li
			class="list-none relative"
			on:mouseenter={() => link === 'services' && servicesNavOpen.set(true)}
			on:mouseleave={() => servicesNavOpen.set(false)}
		>
			<a
				class="relative p-4 font-oswald text-lg uppercase text-gray-800 link-underline"
				class:active={$page.url.pathname.includes(`/${$locale}/${link}`)}
				href="/{$locale}/{link}"
			>
				{$LL[link].title()}
			</a>
			{#if link === 'services'}
				<ServicesNav />
			{/if}
		</li>
	{/each}
</nav>

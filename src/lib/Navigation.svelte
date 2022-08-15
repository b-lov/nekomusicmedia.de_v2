<script context="module">
	import { writable } from 'svelte/store';
	import { navigating, page } from '$app/stores';

	export const navMenuOpen = writable(false);
	export const toggleMenu = () => {
		navMenuOpen.update((n) => (n = !n));
	};
</script>

<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import { slide } from 'svelte/transition';

	/** @type { Array.<keyof Pick<import('$i18n/i18n-types').Translation, 'about' | 'services' | 'contact'>> } */
	const links = ['about', 'services', 'contact'];

	$: if ($navigating) {
		navMenuOpen.set(false);
	}
</script>

{#if $navMenuOpen}
	<nav transition:slide>
		{#each links as link}
			<a class:active={$page.url.pathname.includes(`/${$locale}/${link}`)} href="/{$locale}/{link}">
				{$LL[link].title()}
			</a>
		{/each}
	</nav>
{/if}

<style lang="postcss">
	nav {
		@apply flex flex-col;
	}
	a {
		@apply p-4 font-oswald text-lg uppercase w-full text-right pr-6;
	}
	.active {
		@apply underline;
	}
</style>

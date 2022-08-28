<script context="module">
	import { writable } from 'svelte/store';
	import { navigating, page } from '$app/stores';

	export const mobileNavOpen = writable(false);
	export const toggleMenu = () => {
		mobileNavOpen.update((n) => (n = !n));
	};
</script>

<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import { slide } from 'svelte/transition';

	/** @type { Array.<keyof Pick<import('$i18n/i18n-types').Translation, 'about' | 'services' | 'contact'>> } */
	const links = ['about', 'services', 'contact'];

	$: if ($navigating) {
		mobileNavOpen.set(false);
	}

	/** @param { HTMLElement } node */
	const closeOnClickOutsideHeader = (node) => {
		/** @param { MouseEvent } event */
		const handleClick = (event) => {
			const header = /** @type { HTMLElement } */ (document.querySelector('header'));
			if (!event.composedPath().includes(header)) mobileNavOpen.set(false);
		};
		document.addEventListener('click', handleClick);
		return {
			destroy() {
				document.removeEventListener('click', handleClick);
			}
		};
	};
</script>

{#if $mobileNavOpen}
	<nav class="flex flex-col" transition:slide use:closeOnClickOutsideHeader>
		{#each links as link}
			<a
				class="p-4 font-oswald text-lg uppercase w-full text-right pr-6 text-gray-800"
				class:underline={$page.url.pathname.includes(`/${$locale}/${link}`)}
				href="/{$locale}/{link}"
			>
				{$LL[link].title()}
			</a>
		{/each}
	</nav>
{/if}

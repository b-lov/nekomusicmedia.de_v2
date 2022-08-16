<script>
	import { locale } from '$i18n/i18n-svelte';
	import NavButton from './Hamburger.svelte';
	import Icon from './Icon.svelte';
	import Navigation from './Navigation.svelte';
	import { navMenuOpen } from './Navigation.svelte';

	export let scrollOffset = 30;
	export let scrollTolerance = 7;

	let headerClass = 'show';
	let scrollY = 0;
	let lastY = 0;
	let scrolledAmount = 0;

	$: headerClass = (() => {
		scrolledAmount = lastY === 0 ? 0 : lastY - scrollY;
		lastY = scrollY;
		if (scrollY < scrollOffset) return 'show';
		if (Math.abs(scrolledAmount) <= scrollTolerance) return headerClass;
		if (scrolledAmount < 0) {
			navMenuOpen.set(false);
			return 'hide';
		}
		return 'show';
	})();
</script>

<svelte:window bind:scrollY />

<header class={headerClass}>
	<div>
		<a href="/{$locale}"><Icon class="fill-gray-800" size={3.2} /></a>
		<NavButton />
	</div>
	<Navigation />
</header>

<style lang="postcss">
	header {
		@apply w-full bg-white fixed top-0 transition-transform duration-200 ease-linear z-10
		shadow-lg;
		div {
			@apply flex justify-between items-center pl-3 overflow-hidden;
		}
	}
	.show {
		@apply translate-y-0;
	}
	.hide {
		@apply -translate-y-full;
	}
</style>

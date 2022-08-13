<script>
	import { locale } from '$i18n/i18n-svelte';
	import NavButton from './Hamburger.svelte';
	import Icon from './Icon.svelte';
	import Navigation from './Navigation.svelte';
	import Headroom from './Headroom.svelte';
</script>

<Headroom>
	<header>
		<div>
			<a href="/{$locale}"><Icon size={3.2} /></a>
			<NavButton />
		</div>
		<Navigation />
	</header>
</Headroom>

<style lang="postcss">
	header {
		@apply border-b-2 w-full bg-white;
	}
	div {
		@apply flex justify-between items-center pl-3 overflow-hidden;
	}
</style>

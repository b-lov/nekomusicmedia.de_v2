<script>
	import { toggleMenu } from '$lib/Navigation.svelte';
</script>

<button on:click={toggleMenu}>Nav</button>

<style lang="postcss">
	button {
		@apply bg-red-100 aspect-square w-14;
	}
</style>

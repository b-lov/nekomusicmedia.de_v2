<script>
	export let dark = false;
</script>

<button class={dark ? 'bg-gray-800 text-neutral-100' : 'bg-neutral-100 text-gray-800'}>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply font-oswald px-6 py-4 font-normal;
	}
</style>

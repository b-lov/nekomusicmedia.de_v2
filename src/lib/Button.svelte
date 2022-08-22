<script>
	export let dark = false;
</script>

<button
	on:mousedown
	class="{$$props.class} {dark ? 'bg-gray-800 text-neutral-100' : 'bg-neutral-100 text-gray-800'}"
>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply font-oswald px-6 py-4 font-normal shadow-md tracking-wide focus:outline-none
		focus:ring-2 focus:ring-gray-500 focus:ring-offset-2;
	}
</style>

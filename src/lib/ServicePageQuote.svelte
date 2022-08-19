<script>
	import Icon from './Icon.svelte';

	export let quote = '';
</script>

<div>
	<Icon name="quote" class="absolute fill-gray-300 top-4 left-4 opacity-70" size={10} />
	<h2>{quote}</h2>
</div>

<style lang="postcss">
	div {
		@apply relative p-12;
		h2 {
			@apply relative text-4xl text-gray-500 font-oswald leading-relaxed;
			hyphens: auto;
		}
	}
</style>

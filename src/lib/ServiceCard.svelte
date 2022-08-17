<script>
	import LL from '$i18n/i18n-svelte';
	import Button from '$lib/Button.svelte';

	export let title = '';
	export let teaser = '';
	export let img = '';
	export let link = '';
</script>

<article>
	<img src={img} alt="" />
	<span />
	<h2>{title}</h2>
	<p>{teaser}</p>
	<a href={link}>
		<Button>{$LL.services.more_button()}</Button>
	</a>
</article>

<style lang="postcss">
	article {
		@apply relative aspect-square flex flex-col items-center justify-evenly p-6 shadow-lg;
		img {
			@apply absolute top-0 left-0 w-full h-full object-cover;
		}
		span {
			@apply absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75;
		}
		h2 {
			@apply relative text-gray-100 font-oswald text-4xl;
		}
		p {
			@apply relative text-gray-100 prose text-center;
		}
		a {
			@apply relative;
		}
	}
</style>

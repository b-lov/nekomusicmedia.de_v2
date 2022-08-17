<script>
	import Button from './Button.svelte';

	export let heading = '';
	export let subheading = '';
	export let link = '';
	export let button_text = '';
	export let image = '';
</script>

<article>
	<img src={image} alt="" />
	<span />
	<div>
		<h1>{heading}</h1>
		<h3>{subheading}</h3>
	</div>
	<a href={link}>
		<Button>{button_text}</Button>
	</a>
</article>

<style lang="postcss">
	article {
		@apply relative flex flex-col items-center justify-center p-4 py-10 gap-20;
		img {
			@apply absolute w-full h-full object-cover;
		}
		span {
			@apply absolute w-full h-full bg-gray-800 opacity-75;
		}
		div {
			@apply text-center flex flex-col gap-6;
			h1 {
				@apply relative text-gray-100 font-oswald text-5xl;
			}
			h3 {
				@apply relative text-gray-100 text-xl;
			}
		}
		a {
			@apply relative;
		}
	}
</style>

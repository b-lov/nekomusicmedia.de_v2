<script>
	import Button from './Button.svelte';

	import { LL, locale } from '$i18n/i18n-svelte';

	export let image = '/images/placeholder.webp';
	export let heading = 'Title';
	export let subheading = 'Subtitle';
</script>

<section>
	<img src={image} alt="" />
	<span />
	<div>
		<h1>{heading}</h1>
		<h3>{subheading}</h3>
		<a href="/{$locale}/contact">
			<Button>
				{$LL.contact_button()}
			</Button>
		</a>
	</div>
</section>

<style lang="postcss">
	section {
		@apply h-screen w-full relative;
	}
	img {
		@apply absolute h-full w-full object-cover;
	}
	span {
		@apply absolute h-full w-full bg-gray-800 opacity-75;
	}
	div {
		@apply relative h-full flex flex-col justify-center items-center text-neutral-100 gap-10 p-4 text-center;
	}
	h1 {
		@apply font-oswald text-4xl leading-normal;
	}
	h3 {
		@apply text-lg;
	}
</style>

<script>
	import Button from './Button.svelte';

	import { LL, locale } from '$i18n/i18n-svelte';
	import ScrollDown from './ScrollDown.svelte';
	import { browser } from '$app/env';

	export let image = '/images/placeholder.webp';
	export let heading = 'Title';
	export let subheading = 'Subtitle';

	const handleScrollDown = () => {
		const nextSection = document.querySelector('#hero')?.nextElementSibling;
		nextSection?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section id="hero">
	<img src={image} alt="" />
	<span />
	<div class="outer">
		<div class="inner">
			<h1>{heading}</h1>
			<h3>{subheading}</h3>
		</div>
		<a href="/{$locale}/contact"><Button>{$LL.contact_button()}</Button></a>
		<ScrollDown on:click={handleScrollDown} />
	</div>
</section>

<style lang="postcss">
	section {
		@apply relative;
		img {
			@apply absolute h-full w-full object-cover;
		}
		span {
			@apply absolute h-full w-full bg-gray-800 opacity-75;
		}
		div.outer {
			@apply min-h-screen relative h-full flex flex-col justify-evenly items-center
			text-neutral-100 gap-12 pt-24 p-4 text-center;
			div.inner {
				@apply flex flex-col gap-10;
				h1 {
					@apply font-oswald text-4xl leading-normal;
				}
				h3 {
					@apply text-lg;
				}
			}
		}
	}
</style>

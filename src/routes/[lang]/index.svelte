<script>
	import Hero from '$lib/Hero.svelte';

	import { LL, locale } from '$i18n/i18n-svelte';
	import Button from '$lib/Button.svelte';

	const examples =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['index']['examples']>} */
		(Object.keys($LL.index.examples));
</script>

<Hero
	image={$LL.index.img_hero()}
	heading={$LL.index.heading()}
	subheading={$LL.index.subheading()}
/>

{#each examples as example}
	<div>
		<h2>{$LL.index.examples[example].title()}</h2>
		<p>{$LL.index.examples[example].subtitle()}</p>
		<p>{$LL.index.examples[example].text()}</p>
		<a href="/{$locale}/contact"><Button dark>{$LL.contact_button_offer()}</Button></a>
	</div>
	<img src={$LL.index.examples[example].img()} alt="" />
{/each}

<style lang="postcss">
	div {
		@apply flex flex-col gap-4 p-4 pb-8;
		h2 {
			@apply font-oswald text-3xl leading-normal;
		}
		a {
			/* @apply mx-auto; */
		}
	}
</style>

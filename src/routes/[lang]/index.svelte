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
	<section>
		<div>
			<h2>{$LL.index.examples[example].title()}</h2>
			<h3>{$LL.index.examples[example].subtitle()}</h3>
		</div>
		<img src={$LL.index.examples[example].img()} alt="" />
		<p>{$LL.index.examples[example].text()}</p>
		<a href="/{$locale}/contact"><Button dark>{$LL.contact_button_offer()}</Button></a>
	</section>
{/each}

<style lang="postcss">
	section {
		@apply flex flex-col gap-6 p-4;
		&:last-child {
			@apply pb-8;
		}
		div {
			@apply flex flex-col gap-2;
			h2 {
				@apply font-oswald text-3xl leading-normal;
			}
			h3 {
				@apply text-xl text-gray-400 font-oswald font-light;
			}
		}
		img {
			@apply shadow-lg;
		}
		p {
			@apply prose;
		}
		a {
			@apply self-start;
		}
	}
</style>

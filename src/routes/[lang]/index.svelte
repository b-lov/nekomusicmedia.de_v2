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

<main>
	{#each examples as example}
		<section>
			<article>
				<div>
					<h2>{$LL.index.examples[example].title()}</h2>
					<h3>{$LL.index.examples[example].subtitle()}</h3>
				</div>
				<img src={$LL.index.examples[example].img()} alt="" />
				<p>{$LL.index.examples[example].text()}</p>
				<a href="/{$locale}/contact"><Button dark>{$LL.contact_button_offer()}</Button></a>
			</article>
			<img src={$LL.index.examples[example].img()} alt="" />
		</section>
	{/each}
</main>

<style lang="postcss">
	main {
		@apply max-w-5xl mx-auto px-4 py-8 sm:py-12 flex flex-col gap-8 sm:gap-16;
		> section {
			@apply flex flex-row even:flex-row-reverse gap-8;
			> article {
				@apply flex flex-col gap-6 sm:w-1/2 justify-between;
				> div {
					@apply font-oswald flex flex-col gap-2;
					> h2 {
						@apply text-3xl;
					}
					> h3 {
						@apply text-xl text-gray-500 font-light;
					}
				}
				> img {
					@apply shadow-lg sm:hidden;
				}
				> p {
					@apply prose;
				}
				> a {
					@apply self-start;
				}
			}
			> img {
				@apply hidden sm:block w-1/2 object-cover shadow-xl;
			}
		}
	}
</style>

<script>
	import Hero from '$lib/Hero.svelte';
	import { LL, locale } from '$i18n/i18n-svelte';

	const examples =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['index']['examples']>} */
		(Object.keys($LL.index.examples));
</script>

<Hero
	image={$LL.index.img_hero()}
	heading={$LL.index.heading()}
	subheading={$LL.index.subheading()}
/>

<main class="max-w-5xl mx-auto px-4 py-8 sm:py-12 flex flex-col gap-8 sm:gap-16">
	{#each examples as example}
		<section class="flex flex-row even:flex-row-reverse gap-8">
			<article class="flex flex-col items-start gap-6 sm:w-1/2 justify-between">
				<hgroup class="font-oswald flex flex-col gap-2">
					<h2 class="text-3xl">{$LL.index.examples[example].title()}</h2>
					<h3 class="text-xl text-gray-500 font-light">{$LL.index.examples[example].subtitle()}</h3>
				</hgroup>
				<img class="shadow-lg sm:hidden" src={$LL.index.examples[example].img()} alt="" />
				<p class="prose">{$LL.index.examples[example].text()}</p>
				<a class="button-dark" href="/{$locale}/contact">{$LL.contact_button_offer()}</a>
			</article>
			<img
				class="hidden sm:block w-1/2 object-cover shadow-xl"
				src={$LL.index.examples[example].img()}
				alt=""
			/>
		</section>
	{/each}
</main>

<script>
	import AboutCard from '$lib/AboutCard.svelte';

	import { LL, locale } from '$i18n/i18n-svelte';
	import Hero from '$lib/Hero.svelte';
	import Icon from '$lib/Icon.svelte';

	const examples =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['about']['texts']>} */
		(Object.keys($LL.about.texts));
</script>

<Hero
	image={$LL.about.img_hero()}
	heading={$LL.about.heading()}
	subheading={$LL.about.subheading()}
/>

<section>
	{#each examples as example}
		<AboutCard
			heading={$LL.about.texts[example].title()}
			image={$LL.about.texts[example].img()}
			text={$LL.about.texts[example].text_card()}
		/>
		<div id="paragraph">
			<Icon class="fill-gray-800" size={3} name={example} />
			<p>{$LL.about.texts[example].text()}</p>
		</div>
	{/each}
</section>

<style lang="postcss">
	section {
		@apply flex flex-col items-start gap-6 px-4 pt-8 pb-4;
		#paragraph {
			@apply flex flex-col gap-6 p-4;
			p {
				@apply prose;
			}
		}
	}
</style>

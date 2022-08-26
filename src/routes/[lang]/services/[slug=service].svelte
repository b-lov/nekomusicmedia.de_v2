<script context="module">
	/** @type { import('@sveltejs/kit').Load } */
	export async function load({ params: { slug } }) {
		return { props: { slug } };
	}
</script>

<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import ServicePageArticle from './ServicePageArticle.svelte';
	import ServicePageHero from '$lib/ServicePageHero.svelte';
	import ServicePageBullets from '$lib/ServicePageBullets.svelte';
	import ServicePageQuote from '$lib/ServicePageQuote.svelte';

	/** @type { keyof import('$i18n/i18n-types').Translation['services']['all'] } */
	export let slug;
</script>

<ServicePageHero
	heading={$LL.services.all[slug].title()}
	subheading={$LL.services.all[slug].subtitle()}
	link="/{$locale}/contact"
	button_text={$LL.contact_button_offer()}
	image={$LL.services.all[slug].img_hero()}
/>

<main class="flex flex-col items-center max-w-4xl mx-auto">
	<section class="flex flex-row flex-wrap ">
		<div class="sm:w-1/2">
			<ServicePageArticle iconName="info" text={$LL.services.all[slug].par1()} />
		</div>

		<div class="sm:w-1/2 flex items-center justify-center mx-auto mt-6">
			<ServicePageBullets
				bullets={Object.values($LL.services.all[slug].bullets)}
				title={$LL.services.products_title()}
			/>
		</div>
	</section>

	<ServicePageArticle iconName="rocket" text={$LL.services.all[slug].par2()} />

	<ServicePageQuote quote={$LL.services.all[slug].quote()} />
</main>

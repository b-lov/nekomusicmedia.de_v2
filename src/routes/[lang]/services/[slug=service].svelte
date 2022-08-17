<!-- <script context="module">
	export async function load({ params }) {
		return { props: { slug: params.slug } };
	}
</script> -->
<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';
	import ServicePageHero from '$lib/ServicePageHero.svelte';
	import ServicePageBullets from '$lib/ServicePageBullets.svelte';
	import ServicePageQuote from '$lib/ServicePageQuote.svelte';

	// this doesnt work when navigatin from one [slug] route to another...
	const { slug } =
		/** @type { {slug: keyof import('$i18n/i18n-types').Translation['services']['all']} } */
		($page.params);

	// /** @type { keyof import('$i18n/i18n-types').Translation['services']['all'] } */
	// export let slug;

	const bullets = Object.values($LL.services.all[slug].bullets);
</script>

<ServicePageHero
	heading={$LL.services.all[slug].title()}
	subheading={$LL.services.all[slug].subtitle()}
	link="/{$locale}/contact"
	button_text={$LL.contact_button_offer()}
	image={$LL.services.all[slug].img_hero()}
/>

<article>
	<Icon name="info" size={3} class="fill-gray-800" />
	<p style="white-space: pre-line;">{$LL.services.all[slug].par1()}</p>
</article>

<ServicePageBullets {bullets} title={$LL.services.products_title()} />

<article>
	<Icon name="rocket" />
	<p style="white-space: pre-line;">{$LL.services.all[slug].par2()}</p>
</article>

<ServicePageQuote quote={$LL.services.all[slug].quote()} />

<style lang="postcss">
	article {
		@apply flex flex-col gap-4 px-4 py-8;
		p {
			@apply prose;
		}
	}
</style>

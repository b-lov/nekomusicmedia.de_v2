<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';

	const { slug } =
		/** @type { {slug: keyof import('$i18n/i18n-types').Translation['services']['all']} } */
		($page.params);

	const bullets = Object.values($LL.services.all[slug].bullets);
</script>

<h1>{$LL.services.all[slug].title()}</h1>
<h3>{$LL.services.all[slug].subtitle()}</h3>
<a href="/{$locale}/contact"><button>{$LL.contact_button_offer()}</button></a>
<img src={$LL.services.all[slug].img_hero()} alt="" />

<p style="white-space: pre-line;">{$LL.services.all[slug].par1()}</p>

<h2>{$LL.services.products_title()}</h2>
{#each bullets as bullet}
	<li>{bullet()}</li>
{/each}

<h2>{$LL.services.all[slug].quote()}</h2>

<p style="white-space: pre-line;">{$LL.services.all[slug].par1()}</p>

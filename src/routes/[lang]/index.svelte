<script>
	import { LL, locale } from '$i18n/i18n-svelte';

	const examples =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['index']['examples']>} */
		(Object.keys($LL.index.examples));
</script>

<h1>{$LL.index.heading()}</h1>
<h3>{$LL.index.subheading()}</h3>
<a href="/{$locale}/contact"><button>{$LL.contact_button()}</button></a>

{#each examples as example}
	<h2>{$LL.index.examples[example].title()}</h2>
	<h3>{$LL.index.examples[example].subtitle()}</h3>
	<a href="/{$locale}/contact"><button>{$LL.contact_button_offer()}</button></a>
	<p>{$LL.index.examples[example].text()}</p>
{/each}

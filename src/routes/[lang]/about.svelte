<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import Icon from '$lib/Icon.svelte';

	const examples =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['about']['texts']>} */
		(Object.keys($LL.about.texts));
</script>

<h1>{$LL.about.heading()}</h1>
<h3>{$LL.about.subheading()}</h3>
<a href="/{$locale}/contact"><button>{$LL.contact_button()}</button></a>
<img src={$LL.about.img_hero()} alt="" />

{#each examples as example}
	<h2>{$LL.about.texts[example].title()}</h2>
	<Icon name={example} />
	<p>{$LL.about.texts[example].text1()}</p>
	<img src={$LL.about.texts[example].img()} alt="" />
	<p>{$LL.about.texts[example].text2()}</p>
{/each}

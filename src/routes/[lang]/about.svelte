<script>
	import { LL, locale } from '$i18n/i18n-svelte';

	/** @type {{name: keyof import('$i18n/i18n-types').Translation['about']['texts'], icon: String, picture: String}[]} */
	const examples = [
		{ name: 'experienced', icon: '', picture: '' },
		{ name: 'personal', icon: '', picture: '' },
		{ name: 'diverse', icon: '', picture: '' },
		{ name: 'servicestrong', icon: '', picture: '' }
	];
</script>

<h1>{$LL.about.heading()}</h1>
<h3>{$LL.about.subheading()}</h3>
<a href="/{$locale}/contact"><button>{$LL.contact_button()}</button></a>

{#each examples as { name }}
	<h2>{$LL.about.texts[name].title()}</h2>
	<p>{$LL.about.texts[name].text1()}</p>
	<p>{$LL.about.texts[name].text2()}</p>
{/each}

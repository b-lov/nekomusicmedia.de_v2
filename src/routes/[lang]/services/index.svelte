<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	const services =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['services']['all']>} */
		(Object.keys($LL.services.all));
</script>

<svelte:head>
	<title>{$LL.services.title()}</title>
</svelte:head>

{#each services as service}
	<h2>{$LL.services.all[service].title()}</h2>
	<p>{$LL.services.all[service].teaser()}</p>
	<a href="/{$locale}/services/{service}">
		<button type="button">{$LL.services.more_button()}</button>
	</a>
	<img src={$LL.services.all[service].img_card()} alt="" />
{/each}

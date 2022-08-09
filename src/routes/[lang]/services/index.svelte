<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import services from '$lib/services.json';
</script>

<svelte:head>
	<title>{$LL.services.title()}</title>
</svelte:head>

{#each services as { name }}
	<h2>{$LL.services.all[name].title()}</h2>
	<p>{$LL.services.all[name].teaser()}</p>
	<a href="/{$locale}/services/{name}">
		<button type="button">{$LL.services.more_button()}</button>
	</a>
{/each}

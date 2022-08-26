<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import ServiceCard from '$lib/ServiceCard.svelte';
	const services =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['services']['all']>} */
		(Object.keys($LL.services.all));
</script>

<svelte:head>
	<title>{$LL.services.title()}</title>
</svelte:head>

<main class="flex flex-row flex-wrap gap-8 px-4 py-8 justify-center max-w-7xl mx-auto">
	{#each services as service}
		<ServiceCard
			title={$LL.services.all[service].title()}
			teaser={$LL.services.all[service].teaser()}
			link="/{$locale}/services/{service}"
			img={$LL.services.all[service].img_card()}
		/>
	{/each}
</main>

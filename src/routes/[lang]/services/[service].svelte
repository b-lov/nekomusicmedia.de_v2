<script context="module">
	import { LL, locale } from '$i18n/i18n-svelte';
	import { get } from 'svelte/store';

	/** @type { import('@sveltejs/kit').Load } */
	export async function load({ params: { service } }) {
		const all_sevices = Object.keys(get(LL).services.all);

		if (!all_sevices.includes(service)) {
			return {
				status: 302,
				redirect: `/${locale}/services`
			};
		}

		return { props: { service } };
	}
</script>

<script>
	/** @type {keyof import('$i18n/i18n-types').Translation['services']['all']} */
	export let service;

	const bullets = Object.values($LL.services.all[service].bullets);
</script>

<h1>{$LL.services.all[service].title()}</h1>
<h3>{$LL.services.all[service].subtitle()}</h3>
<a href="/{$locale}/contact"><button>{$LL.contact_button_offer()}</button></a>

<p style="white-space: pre-line;">{$LL.services.all[service].par1()}</p>

<h2>{$LL.services.products_title()}</h2>
{#each bullets as bullet}
	<li>{bullet()}</li>
{/each}

<h2>{$LL.services.all[service].quote()}</h2>

<p style="white-space: pre-line;">{$LL.services.all[service].par1()}</p>

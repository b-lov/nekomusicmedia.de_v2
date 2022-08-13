<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import Icon from './Icon.svelte';

	const services =
		/** @type {Array.<keyof import('$i18n/i18n-types').Translation['services']['all']>} */
		(Object.keys($LL.services.all));

	const social_media = [
		{ id: 'twitter', link: 'https://twitter.com/NEKOMusicMedia' },
		{ id: 'facebook', link: 'https://www.facebook.com/Neko-Music-Media-187715074593479' },
		{ id: 'instagram', link: 'https://www.instagram.com/nekomusicmedia/' },
		{ id: 'linkedin', link: 'https://www.linkedin.com/company/neko-music-media-gmbh' },
		{ id: 'xing', link: 'https://www.xing.com/companies/nekomusic%26mediagmbh' }
	];
</script>

<footer>
	<h2>{$LL.footer.social_media_heading()}</h2>
	<h3>{$LL.footer.social_media_subheading()}</h3>

	{#each social_media as item}
		<a href={item.link} target="_blank">
			<Icon name={item.id} />
		</a>&nbsp;
	{/each}

	<h4>{$LL.footer.links()}</h4>
	<a href="/">{$LL.index.title()}</a>
	<a href="/{$locale}/about">{$LL.about.title()}</a>
	<a href="/{$locale}/contact">{$LL.contact.title()}</a>
	<a href="/{$locale}/impressum">Impressum</a>
	<a href="/{$locale}/datenschutz">Datenschutz</a>
	<a href="/{$locale}/agb">AGB</a>

	<h4>{$LL.footer.all_services()}</h4>
	{#each services as service}
		<a href="/{$locale}/services/{service}">{$LL.services.all[service].title()}</a><br />
	{/each}

	<p>{$LL.footer.copyright({ year: new Date().getFullYear() })}</p>
</footer>

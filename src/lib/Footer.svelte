<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import services from '$lib/services.json';
	const social_media = [
		{ id: 'twitter', link: 'https://twitter.com/NEKOMusicMedia', icon: '' },
		{ id: 'facebook', link: 'https://www.facebook.com/Neko-Music-Media-187715074593479', icon: '' },
		{ id: 'instagram', link: 'https://www.instagram.com/nekomusicmedia/', icon: '' },
		{ id: 'linkedin', link: 'https://www.linkedin.com/company/neko-music-media-gmbh', icon: '' },
		{ id: 'xing', link: 'https://www.xing.com/companies/nekomusic%26mediagmbh', icon: '' }
	];
</script>

<h2>{$LL.footer.social_media_heading()}</h2>
<h3>{$LL.footer.social_media_subheading()}</h3>

{#each social_media as item}
	<a href={item.link} target="_blank">{item.id}</a>&nbsp;
{/each}

<h4>{$LL.footer.links()}</h4>
<a href="/">{$LL.index.title()}</a>
<a href="/{$locale}/about">{$LL.about.title()}</a>
<a href="/{$locale}/contact">{$LL.contact.title()}</a>
<a href="/{$locale}/impressum">Impressum</a>
<a href="/{$locale}/datenschutz">Datenschutz</a>
<a href="/{$locale}/agb">AGB</a>

<h4>{$LL.footer.all_services()}</h4>
{#each services as { name }}
	<a href="/{$locale}/services/{name}">{$LL.services.all[name].title()}</a>&nbsp;
{/each}

<p>Copyright © {new Date().getFullYear()} NEKO Music & Media GmbH</p>

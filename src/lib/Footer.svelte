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
	<div id="footer-heading">
		<h2>{$LL.footer.social_media_heading()}</h2>
		<h3>{$LL.footer.social_media_subheading()}</h3>
	</div>

	<div id="social-media">
		{#each social_media as item}
			<a href={item.link} target="_blank">
				<Icon class="fill-gray-800" name={item.id} size={1.5} />
			</a>
		{/each}
	</div>

	<div id="links">
		<div>
			<h4>{$LL.footer.links()}</h4>
			<a href="/{$locale}">{$LL.index.title()}</a>
			<a href="/{$locale}/about">{$LL.about.title()}</a>
			<a href="/{$locale}/contact">{$LL.contact.title()}</a>
			<a href="/{$locale}/impressum">Impressum</a>
			<a href="/{$locale}/datenschutz">Datenschutz</a>
			<a href="/{$locale}/agb">AGB</a>
		</div>
		<div>
			<h4>{$LL.footer.all_services()}</h4>
			{#each services as service}
				<a href="/{$locale}/services/{service}">{$LL.services.all[service].title()}</a>
			{/each}
		</div>
	</div>

	<div id="copyright">
		<hr />
		<p>Deutsch • English • Русский</p>
		<p>{$LL.footer.copyright({ year: new Date().getFullYear() })}</p>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply bg-gray-800 text-gray-200 px-4 py-6 flex flex-col items-stretch gap-8;
		#footer-heading {
			@apply flex flex-col gap-2 text-center;
			h2 {
				@apply text-2xl font-oswald;
			}
		}
		#social-media {
			@apply flex gap-4 justify-center flex-wrap;
			a {
				@apply p-2 bg-gray-200 rounded-full w-12 aspect-square flex items-center justify-center;
			}
		}
		#links {
			@apply flex flex-wrap gap-10 justify-between px-4;
			div {
				@apply flex flex-col gap-2;
				h4 {
					@apply text-sm font-oswald uppercase;
				}
				a {
					@apply text-sm text-gray-400;
				}
			}
		}
		hr {
			@apply border-gray-500;
		}
		#copyright {
			@apply flex flex-col gap-4;
			p {
				@apply text-sm text-gray-500 text-center;
			}
		}
	}
</style>

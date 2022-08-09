<script>
	import LL from '$i18n/i18n-svelte.js';
	import { locale } from '$i18n/i18n-svelte';
</script>

<a href="/{$locale}/about">{$LL.about.title()}</a>
<a href="/{$locale}/services">{$LL.services.title()}</a>
<a href="/{$locale}/contact">{$LL.contact.title()}</a>

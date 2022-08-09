<script>
	import LL from '$i18n/i18n-svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import GoogleMap from '$lib/GoogleMap.svelte';
</script>

<h2>{$LL.contact.heading()}</h2>
<p style="white-space: pre-line">{$LL.contact.subheading()}</p>
<ContactForm />

<h2>{$LL.contact.contact_data.heading()}</h2>
<p style="white-space: pre-line">{$LL.contact.contact_data.subheading()}</p>
<GoogleMap />
<p style="white-space: pre-line">{@html $LL.contact.contact_data.address()}</p>

<script>
	import LL from '$i18n/i18n-svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import GoogleMap from '$lib/GoogleMap.svelte';
</script>

<main class="flex flex-col items-center gap-8 px-4 py-8 max-w-4xl mx-auto">
	<h2 class="font-oswald text-4xl leading-normal">{$LL.contact.heading()}</h2>
	<p class="prose text-center" style="white-space: pre-line">{$LL.contact.subheading()}</p>

	<ContactForm />

	<h2 class="font-oswald text-4xl leading-normal">{$LL.contact.contact_data.heading()}</h2>
	<p class="prose text-center" style="white-space: pre-line">
		{$LL.contact.contact_data.subheading()}
	</p>

	<GoogleMap />

	<address
		class="font-oswald font-light not-italic text-xl text-gray-500 leading-normal tracking-wide"
		style="white-space: pre-line"
	>
		{@html $LL.contact.contact_data.address()}
	</address>
</main>

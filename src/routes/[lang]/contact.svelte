<!-- <script context="module">
	export const prerender = true;
</script> -->
<script>
	import LL from '$i18n/i18n-svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import GoogleMap from '$lib/GoogleMap.svelte';
</script>

<section>
	<h2>{$LL.contact.heading()}</h2>
	<p style="white-space: pre-line">{$LL.contact.subheading()}</p>

	<ContactForm />

	<h2>{$LL.contact.contact_data.heading()}</h2>
	<p style="white-space: pre-line">{$LL.contact.contact_data.subheading()}</p>

	<GoogleMap />

	<p style="white-space: pre-line">{@html $LL.contact.contact_data.address()}</p>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col items-center gap-8 px-4 py-8;
		h2 {
			@apply font-oswald text-4xl leading-normal;
		}
		p {
			@apply prose text-center;
			&:last-child {
				@apply font-oswald font-light text-xl text-gray-500 leading-normal tracking-wide;
			}
		}
	}
</style>

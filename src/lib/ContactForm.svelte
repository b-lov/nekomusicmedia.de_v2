<!-- TODO: add netfliy forms -->
<script>
	import { browser } from '$app/env';
	import { writable } from 'svelte/store';
	import LL from '$i18n/i18n-svelte';
	import Button from './Button.svelte';

	// get form values from localstorage or set to empty
	const messageData = writable(
		browser &&
			JSON.parse(
				localStorage.getItem('messageData') || '{"name": "", "email": "", "tel": "", "message": ""}'
			)
	);

	// write form values to localstorage to keep on reload
	messageData.subscribe((value) => {
		if (browser) localStorage.setItem('messageData', JSON.stringify(value));
	});

	// dont allow spaces in email filed
	/** @param { KeyboardEvent } e */
	const disallowSpaces = (e) => e.code === 'Space' && e.preventDefault();

	// trim possible whitespace on in form fields before submit
	const trimWhitespace = () => {
		Object.keys($messageData).forEach(
			(k) => ($messageData[k] = $messageData[k].trim().replace(/\s+/g, ' '))
		);
	};

	const handleSubmit = () => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams($messageData).toString()
		})
			.then(() => alert('Nachricht verschickt!'))
			.catch((error) => alert(error));
	};
</script>

<!-- TODO: error messages based on current locale -->

<form name="contact" data-netlify="true" on:submit|preventDefault={handleSubmit}>
	<div>
		<label for="name">{$LL.contact.form.name()}</label>
		<input
			bind:value={$messageData.name}
			type="text"
			name="name"
			id="name"
			placeholder={$LL.contact.form.name()}
			pattern={String.raw`[A-zÀ-ž\u0400-\u04ff\s.-]{2,}`}
			maxlength="25"
			title={$LL.contact.form.name_error()}
			required
		/>
	</div>
	<div>
		<label for="email">{$LL.contact.form.email()}</label>
		<input
			bind:value={$messageData.email}
			type="email"
			name="email"
			id="email"
			placeholder={$LL.contact.form.email()}
			required
			on:keydown={disallowSpaces}
		/>
	</div>
	<div>
		<label for="tel">{$LL.contact.form.tel()}</label>
		<input
			bind:value={$messageData.tel}
			type="tel"
			name="tel"
			id="tel"
			placeholder={$LL.contact.form.tel()}
			pattern={String.raw`[0-9+\s]{4,}`}
			maxlength="25"
			title={$LL.contact.form.tel_error()}
		/>
	</div>
	<div>
		<label for="message">{$LL.contact.form.message()}</label>
		<textarea
			bind:value={$messageData.message}
			name="message"
			id="message"
			rows="6"
			placeholder={$LL.contact.form.message()}
			maxlength="700"
			required
		/>
	</div>
	<div id="privacy-wrapper">
		<input type="checkbox" name="privacy" id="privacy" required />
		<label for="privacy"><p>{$LL.contact.form.privacy()}</p></label>
	</div>
	<Button on:mousedown={() => trimWhitespace()} class="self-center" dark>
		{$LL.contact.form.send_button()}
	</Button>
</form>

<style lang="postcss">
	form {
		@apply flex flex-col gap-6 w-full;
		div {
			@apply flex flex-col gap-2;
			label:not([for='privacy']) {
				@apply text-sm hidden;
			}
			input:not([type='checkbox']),
			textarea {
				@apply p-3 border border-gray-300 shadow-md focus:outline-none focus:ring-2
				focus:ring-offset-2 focus:ring-gray-500 placeholder:text-gray-400;
				&:invalid:not(:placeholder-shown) {
					@apply bg-red-50;
				}
				&:valid:not(:placeholder-shown) {
					@apply bg-green-50;
				}
			}
		}
		#privacy-wrapper {
			@apply flex flex-row;
			input {
				@apply p-2 text-gray-800 focus:ring-0 focus:ring-offset-0 mt-1;
			}
			label {
				@apply cursor-pointer select-none;
				p {
					@apply prose prose-sm;
				}
			}
		}
	}
</style>

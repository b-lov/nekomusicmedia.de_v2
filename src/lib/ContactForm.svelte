<!-- TODO: error messages based on current locale -->
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
		console.log($messageData);
	};
</script>

<form
	name="contact"
	action="/"
	method="POST"
	data-netlify="true"
	on:submit|preventDefault={handleSubmit}
>
	<div>
		<label for="name">{$LL.contact.form.name()}</label>
		<input
			bind:value={$messageData.name}
			type="text"
			name="user_name"
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
			name="user_email"
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
			name="user_tel"
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
			name="user_message"
			id="message"
			rows="6"
			placeholder={$LL.contact.form.message()}
			maxlength="700"
			required
		/>
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
			label {
				@apply text-sm hidden;
			}
			input,
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
	}
</style>

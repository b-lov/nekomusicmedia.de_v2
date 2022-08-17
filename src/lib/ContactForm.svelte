<script>
	import LL from '$i18n/i18n-svelte';
	import Button from './Button.svelte';

	/** @param { KeyboardEvent } e */
	const disallowSpaces = (e) => e.code === 'Space' && e.preventDefault();
</script>

<form name="contact" action="/" method="POST" data-netlify="true" on:submit|preventDefault>
	<div>
		<label for="name">{$LL.contact.form.name()}</label>
		<input
			type="text"
			name="user_name"
			id="name"
			placeholder={$LL.contact.form.name()}
			pattern={String.raw`[A-zÀ-ž\u0400-\u04ff\s.-]{2,}`}
			maxlength="25"
			title="Die Eingabe muss mindestens 2 Zeichen enthalten. Nur Buchstaben sowie '-' und  '.' erlaubt."
			required
		/>
	</div>
	<div>
		<label for="email">{$LL.contact.form.email()}</label>
		<input
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
			type="tel"
			name="user_tel"
			id="tel"
			placeholder={$LL.contact.form.tel()}
			pattern={String.raw`[0-9+\s]{4,}`}
			maxlength="25"
			title="Die Eingabe muss mindestens 4 Zeichen enthalten. Nur Zahlen und '+' erlaubt."
		/>
	</div>
	<div>
		<label for="message">{$LL.contact.form.message()}</label>
		<textarea
			name="user_message"
			id="message"
			rows="6"
			placeholder={$LL.contact.form.message()}
			maxlength="700"
			required
		/>
	</div>
	<Button class="self-center" dark>{$LL.contact.form.send_button()}</Button>
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
				@apply p-3 border border-gray-300 shadow focus:outline-none
				focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 placeholder:text-gray-400;
			}
		}
	}
</style>

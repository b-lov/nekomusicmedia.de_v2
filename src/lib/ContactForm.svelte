<script>
	import LL from '$i18n/i18n-svelte';
</script>

<form name="contact" action="/" method="POST" data-netlify="true">
	<div>
		<label for="firstname">{$LL.contact.form.name()}</label>
		<input type="text" name="user_firstname" id="firstname" required />
	</div>
	<div>
		<label for="lastname">{$LL.contact.form.surname()}</label>
		<input type="text" name="user_lastname" id="lastname" />
	</div>
	<div>
		<label for="company">{$LL.contact.form.company()}</label>
		<input type="text" name="user_company" id="company" />
	</div>
	<div>
		<label for="email">{$LL.contact.form.email()}</label>
		<input type="email" name="user_email" id="email" required />
	</div>
	<div>
		<label for="phone">{$LL.contact.form.phone()}</label>
		<input type="tel" name="user_phone" id="phone" pattern={String.raw`^\+?\d{(0, 13)}`} />
	</div>
	<div>
		<label for="message">{$LL.contact.form.message()}</label>
		<textarea id="message" name="user_message" rows="6" required />
	</div>
	<button type="submit">{$LL.contact.form.send_button()}</button>
</form>

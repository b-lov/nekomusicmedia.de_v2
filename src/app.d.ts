// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

type Locales = import('$i18n/i18n-types').Locales;

declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
	interface Session {
		locale?: Locales;
	}
	// interface Stuff {}
}

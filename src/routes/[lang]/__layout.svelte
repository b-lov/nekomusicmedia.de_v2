<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	// use this if you want to offset header
	/** @param { HTMLElement } node */
	const setPaddingTop = (node) => {
		const headerHeight = document.getElementsByTagName('header')[0].getBoundingClientRect().height;
		node.style.paddingTop = `${headerHeight}px`;
	};
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss">
	main {
		/* minus header */
		@apply pt-20;
	}
</style>

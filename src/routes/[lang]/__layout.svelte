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

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="pt-20 flex-grow">
		<slot />
	</main>
	<Footer />
</div>

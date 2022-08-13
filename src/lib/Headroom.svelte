<!-- https://github.com/collardeau/svelte-headroom -->
<script>
	import { createEventDispatcher } from 'svelte';

	export let offset = 50;
	export let tolerance = 5;

	let headerClass = 'pin';
	let lastHeaderClass = 'pin';
	let y = 0;
	let lastY = 0;

	const dispatch = createEventDispatcher();

	const deriveClass = (y = 0, scrolled = 0) => {
		if (y < offset) return 'pin';
		if (!scrolled || Math.abs(scrolled) < tolerance) return headerClass;
		const dir = scrolled < 0 ? 'down' : 'up';
		if (dir === 'up') return 'pin';
		if (dir === 'down') return 'unpin';
		return headerClass;
	};

	const updateClass = (y = 0) => {
		const scrolledPxs = lastY - y;
		const result = deriveClass(y, scrolledPxs);
		lastY = y;
		return result;
	};

	$: {
		headerClass = updateClass(y);
		if (headerClass !== lastHeaderClass) {
			dispatch(headerClass);
		}
		lastHeaderClass = headerClass;
	}
</script>

<svelte:window bind:scrollY={y} />
<div class={headerClass}>
	<slot />
</div>

<style>
	div {
		position: fixed;
		width: 100%;
		top: 0;
		transition: transform 200ms linear;
	}
	.pin {
		transform: translateY(0%);
	}
	.unpin {
		transform: translateY(-100%);
	}
</style>

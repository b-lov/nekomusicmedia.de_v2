<script>
	import { fly, slide } from 'svelte/transition';

	/** @param { 'success' | 'error' | 'info'} newType */
	let type = 'success';
	let heading = 'Heading';
	let subheading = 'Subheading';
	let visible = false;
	const duration = 5000;

	/**
	 * @param { 'success' | 'error' | 'info'} newType
	 * @param { String } newHeading
	 * @param { String } newSubheading
	 */
	// TODO: dont notify again if notify function already running
	export const notify = (newType, newHeading, newSubheading) => {
		// console.log('start notify');
		type = newType;
		heading = newHeading;
		subheading = newSubheading;
		visible = true;
		setTimeout(() => {
			visible = false;
			// console.log('end notify');
		}, duration);
	};

	const setColors = (element = 'bg') => {
		switch (type) {
			case 'success':
				return element === 'bg' ? `bg-green-900` : `bg-green-500`;
			case 'error':
				return element === 'bg' ? `bg-red-900` : `bg-red-500`;
			case 'info':
				return element === 'bg' ? `bg-yellow-900` : `bg-yellow-500`;
		}
	};
</script>

{#if visible}
	<article out:fly in:slide class={setColors()}>
		<h1>{heading}</h1>
		<p>{@html subheading}</p>
		<div id="bar">
			<span style="animation-duration: {duration}ms;" class={setColors('bar')} />
		</div>
	</article>
{/if}

<style lang="postcss">
	article {
		@apply fixed bottom-0 right-0 m-4 flex flex-col gap-2 p-3 pb-5 text-right shadow-lg;
		h1 {
			@apply text-sm text-gray-300 font-medium;
		}
		p {
			@apply text-xs text-gray-300;
		}
		#bar {
			@apply absolute flex h-1.5 w-full bottom-0 left-0;
			span {
				@apply h-full w-full;
				animation: bar-animation linear forwards;
			}
		}
	}
	@keyframes bar-animation {
		form {
			width: 100%;
		}
		to {
			width: 0%;
		}
	}
</style>

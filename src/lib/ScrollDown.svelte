<button on:click>
	<span />
	<span />
	<span />
</button>

<style lang="postcss">
	button {
		@apply relative w-12 pt-20;
	}
	span {
		@apply absolute top-0 border-l border-b border-gray-100 opacity-0 box-border left-1/2
    w-6 h-6 -ml-3 -rotate-45;
		animation: blink 2s infinite;
	}
	span:nth-of-type(1) {
		animation-delay: 0s;
	}
	span:nth-of-type(2) {
		top: 16px;
		animation-delay: 0.15s;
	}
	span:nth-of-type(3) {
		top: 32px;
		animation-delay: 0.3s;
	}
	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>

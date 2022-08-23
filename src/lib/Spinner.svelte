<div>
	<span id="outside" />
	<span id="inside" />
</div>

<style lang="postcss">
	div {
		@apply relative w-12 h-12;
		span {
			@apply absolute block w-full h-full rounded-full border-4 border-black;
		}
		#outside {
			@apply border-gray-300;
		}
		#inside {
			@apply border-transparent border-t-gray-800;
			animation: rotate 1s linear infinite;
		}
		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(359deg);
			}
		}
	}
</style>

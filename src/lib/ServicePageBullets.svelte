<script>
	//
	export let title = '';
	/** @type { (() => String)[] } */
	export let bullets;
</script>

<article>
	<h2>{title}</h2>
	<ul>
		{#each bullets as bullet}
			<li>
				{bullet()}
			</li>
		{/each}
	</ul>
</article>

<style lang="postcss">
	article {
		@apply flex flex-col gap-8 p-6 bg-gray-800 text-gray-100 w-fit mx-auto shadow-lg;
		h2 {
			@apply text-4xl font-oswald;
		}
		ul {
			@apply flex flex-col gap-2;
			li {
				/* @apply text-lg; */
				&:before {
					content: '✓';
					@apply mr-4 text-3xl;
				}
			}
		}
	}
</style>

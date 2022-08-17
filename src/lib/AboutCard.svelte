<script>
	export let heading = 'heading';
	export let image = '/images/placeholder.webp';
	export let text = 'lorem ipsum dolor sit amet consectetur adipisicing elit.';
</script>

<article>
	<div id="head">
		<img src={image} alt="" />
		<span />
		<h2>{heading}</h2>
	</div>
	<p>{text}</p>
</article>

<style lang="postcss">
	article {
		@apply shadow-xl;
		#head {
			@apply relative flex items-center justify-center p-6 bg-blue-300;
			img {
				@apply absolute top-0 left-0 w-full h-full object-cover;
			}
			span {
				@apply absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70;
			}
			h2 {
				@apply relative text-gray-100 font-oswald text-3xl;
			}
		}
		p {
			@apply p-4 prose;
		}
	}
</style>

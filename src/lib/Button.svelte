<!-- TODO: #20 dont wrap buttons in links -->
<script>
	export let dark = false;
</script>

<button
	on:mousedown
	class="
		{$$props.class}
		{dark
		? 'bg-gray-800 hover:bg-gray-600 text-neutral-100'
		: 'bg-neutral-100 hover:bg-neutral-300 text-gray-800'}
		font-oswald px-6 py-4 font-normal shadow-md tracking-wide transition
		focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
	"
>
	<slot />
</button>

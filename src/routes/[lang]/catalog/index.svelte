<script>
	import items from './catalog';

	var formatter = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR'
	});
</script>

<main class="prose max-w-4xl mx-auto px-4 py-8">
	<h1>Sound</h1>
	<h2>Lautsprecher</h2>
	<table class="table-auto">
		<thead>
			<tr>
				<th class="">Hersteller</th>
				<th class="">Modell</th>
				<th class="">Preis (inkl. MwSt.)</th>
			</tr>
		</thead>
		<tbody>
			{#each items.speakers as item}
				<tr>
					<td>{item.manufacturer}</td>
					<td>{item.model}</td>
					<td>{formatter.format(item.price)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

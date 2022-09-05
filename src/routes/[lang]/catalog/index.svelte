<script>
	import items from './catalog';
	import LL from '$i18n/i18n-svelte';

	var formatter = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR'
	});

	/** @typedef {keyof import('$i18n/i18n-types').Translation['catalog']['categories']} categoryTranslation */
	/** @typedef {keyof import('$i18n/i18n-types').Translation['catalog']['categories'][categoryTranslation]['subcategories']} subcategoryTranslation */

	/** @param {Object} category */
	const categoryHeading = (category) => {
		const categoryName = /** @type {categoryTranslation} */ (Object.keys(category)[0]);
		return $LL.catalog.categories[categoryName].title();
	};

	/**
	 * @param {Object} category,
	 * @param {Object} subcategory
	 */
	const subcategoryHeading = (category, subcategory) => {
		const categoryName = /** @type {categoryTranslation} */ (Object.keys(category)[0]);
		const subcategoryName = Object.keys(subcategory)[0];
		// @ts-ignore
		return $LL.catalog.categories[categoryName].subcategories[subcategoryName]();
	};
</script>

<main
	class="prose max-w-4xl mx-auto px-4 py-8 prose-h1:font-oswald prose-h2:font-oswald prose-headings:font-medium"
>
	{#each items as category}
		<section class="pb-4">
			<h1>{categoryHeading(category)}</h1>
			{#each Object.values(category)[0] as subcategory}
				<h2>{subcategoryHeading(category, subcategory)}</h2>
				<table class="table-auto">
					<thead>
						<tr>
							<th>{$LL.catalog.table.manufacturer()}</th>
							<th>{$LL.catalog.table.model()}</th>
							<th>{$LL.catalog.table.price()}</th>
						</tr>
					</thead>
					<tbody>
						{#each Object.values(subcategory)[0] as product}
							<tr>
								<td>{product.manufacturer}</td>
								<td>{product.model}</td>
								<td>{formatter.format(product.price)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/each}
		</section>
	{/each}
</main>

<script lang="ts">
	import type { PortfolioEntry } from '$lib/util/data'

	export let entry: PortfolioEntry
</script>

<div class="flex flex-col-reverse sm:flex-row items-center p-4 justify-between w-full">
	<div class="flex flex-col justify-start w-full">
		<h2 class="text-xl font-bold">{entry.title}</h2>

		{#if entry.time}
			<h2 class="text-xl font-bold">{entry.time}</h2>
		{/if}

		<h3 class="mt-2 pr-4">{entry.description}</h3>
	</div>
	<img class="w-9/12 rounded-2xl mb-4 sm:w-1/3 sm:mb-0" src={entry.imageUrl} alt={entry.imageAlt} />
</div>

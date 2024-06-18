<script lang="ts">
	import Entry from '$lib/components/Entry.svelte'
	import { type PageInfo, getAge } from '$lib/util/data'

	export let data: PageInfo

	const subtitle = data.subtitle ? data.subtitle.replace('[AGE]', getAge()) : null
</script>

<div class="flex justify-center min-h-screen max-w-full h-auto p-4">
	<div class="flex flex-col items-center w-full min-h-full bg-zinc-900 text-white rounded-2xl p-4">
		<h1 class="text-4xl font-bold">{data.title}</h1>

		{#if subtitle}
			<div class="flex items-center justify-center mt-2 text-gray-500">
				<h2 class="text-xl font-bold w-4/5">
					{subtitle}
				</h2>
			</div>
		{/if}

		{#each data.entries as entry}
			<Entry {entry} />
		{/each}
	</div>
</div>

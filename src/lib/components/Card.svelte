<script lang="ts">
	import { getYear, type CardInfo } from '$lib/util/data'

	export let info: CardInfo

	const isBio = info.href.includes('bio')

	const description = info.description.includes('[YEAR]') ? info.description.replace('[YEAR]', getYear()) : info.description
</script>

<a href={info.href}>
	<div
		class="flex flex-col justify-center items-center w-full min-h-[300px] h-full rounded-lg bg-zinc-900 transform transition duration-200 active:scale-90 hover:scale-105"
	>
		<div class="flex flex-col justify-center items-center p-2 text-center text-white">
			{#if info.imageUrl !== null}
				<img class="w-[175px] h-[175px] p-2" class:rounded-[175px]={isBio} src={info.imageUrl} alt={info.imageAlt} />
			{/if}
			<h1 class="text-[2rem] font-bold">{info.title}</h1>
			<h2 class="text-base">{description}</h2>
		</div>
	</div>
</a>

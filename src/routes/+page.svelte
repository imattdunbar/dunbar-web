<script lang="ts">
	import Card from '$lib/components/Card.svelte'

	export let data
</script>

<div class="flex justify-center items-center min-h-screen max-w-full">
	<div class="main-grid w-full h-full p-4 gap-4">
		{#each data.cards as info}
			<Card {info} />
		{/each}
	</div>
</div>

<style>
	.main-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>

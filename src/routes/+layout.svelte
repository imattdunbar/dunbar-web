<script lang="ts">
	import '$lib/styles/global.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { isAppMode } from '$lib/util/client';
	import PageTransition from '$lib/components/PageTransition.svelte';

	inject({ mode: dev ? 'development' : 'production' });

	export let data;
</script>

<div class:py-16={isAppMode()}>
	<main class="main">
		<PageTransition key={data.pathname}>
			<slot />
		</PageTransition>
	</main>
</div>

<style>
	:global(:root),
	:global(html),
	:global(body) {
		background-color: black;
		font-family: 'Roboto', -apple-system, sans-serif;
	}

	:global(body) {
		height: 100%;
		max-width: 1080px;
		margin: auto;
		padding: 0;
	}

	.main {
		overflow: hidden;
	}
</style>

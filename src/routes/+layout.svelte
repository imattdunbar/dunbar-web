<script lang="ts">
	import '$lib/styles/global.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { isAppMode } from '$lib/util/client';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class:py-16={isAppMode()}>
	<main>
		<slot />
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
</style>

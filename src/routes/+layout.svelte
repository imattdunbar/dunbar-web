<script lang="ts">
	import '$lib/styles/global.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

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

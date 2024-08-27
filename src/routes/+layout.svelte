<script lang="ts">
	import '$lib/styles/global.css'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import { isAppMode } from '$lib/util/client'
	import { onNavigate } from '$app/navigation'
	import type { OnNavigate } from '@sveltejs/kit'

	onNavigate((navigation: OnNavigate) => {
		const doc = document as any
		if (!doc.startViewTransition) return
		return new Promise((resolve) => {
			doc.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	inject({ mode: dev ? 'development' : 'production' })
</script>

<div class:py-16={isAppMode()}>
	<main class="main">
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

	.main {
		overflow: hidden;
	}
</style>

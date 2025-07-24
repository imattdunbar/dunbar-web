import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 7777,
    host: true
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      customViteReactPlugin: true,
      target: 'vercel',
      sitemap: {
        host: 'https://mattdunbar.io'
      },
      prerender: {
        enabled: true,
        crawlLinks: false,
        filter: (page) => {
          // Only prerender home/index page
          return page.path === '/'
        },
        onSuccess: (result) => {
          console.log(`Prerendered path ${result.page.path}`)
        }
      }
    }),
    tailwindcss(),
    viteReact()
  ],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignoring these warnings for now until TanStack Start is 1.0
        if (['CIRCULAR_DEPENDENCY', 'UNUSED_EXTERNAL_IMPORT', 'SOURCEMAP_BROKEN'].includes(warning.code ?? '---'))
          return
        warn(warning)
      }
    }
  }
})

import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig({
  server: {
    port: 7777,
    host: true
  },
  plugins: [
    viteTsConfigPaths(),
    tanstackStart({
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
    nitro({ preset: 'vercel' }),
    viteReact()
  ]
})

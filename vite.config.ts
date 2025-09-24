import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Using nitro v3 beta to deploy to Vercel
// https://v3.nitro.build/docs/migration
// https://tanstack.com/start/latest/docs/framework/react/hosting#using-nitro-v3-beta
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
    nitro({
      config: {
        preset: 'vercel'
      }
    }),
    viteReact()
  ]
})

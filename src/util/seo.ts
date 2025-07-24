import css from '@/ui/styles/global.css?url'

function getDefaultHead(options: {
  title: string
  description: string
  ogImage: string
  twitterHandle?: string
  keywords?: string
}) {
  return {
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: options.title
      },
      { title: options.title },
      { name: 'description', content: options.description },
      { name: 'keywords', content: options.keywords },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      ...(options.twitterHandle
        ? [
            { name: 'twitter:creator', content: options.twitterHandle },
            { name: 'twitter:site', content: options.twitterHandle }
          ]
        : []),
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: options.title },
      { name: 'og:description', content: options.description },
      { name: 'twitter:image', content: options.ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'og:image', content: options.ogImage }
    ],
    links: [
      { rel: 'stylesheet', href: css },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      },

      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },

      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ]
  }
}

export function defaultHead() {
  return getDefaultHead({
    title: 'Matt Dunbar',
    description: `Matt Dunbar's Resume Site`,
    ogImage: '/og-image.png'
  })
}

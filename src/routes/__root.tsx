/// <reference types="vite/client" />

import type { ReactNode } from 'react'
import { Outlet, HeadContent, Scripts, Navigate } from '@tanstack/react-router'
import { createRootRouteWithContext } from '@tanstack/react-router'
import type { RouterContext } from '@/router'
import { defaultHead } from '@/util/seo'

const isDev = import.meta.env.DEV

export const Route = createRootRouteWithContext<RouterContext>()({
  head: defaultHead,
  component: RootComponent,
  notFoundComponent: () => {
    return Navigate({ to: '/' })
  }
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />

        {isDev ? (
          <script defer src="https://assets.onedollarstats.com/stonks.js" data-debug="mattdunbar.io"></script>
        ) : (
          <script defer src="https://assets.onedollarstats.com/stonks.js"></script>
        )}
      </body>
    </html>
  )
}

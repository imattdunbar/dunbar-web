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
  // const { queryClient } = Route.useRouteContext()

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
        {!isDev && (
          <script
            defer
            src="https://umami-production-f51b.up.railway.app/script.js"
            data-website-id="c3af060d-7553-40b8-843d-0f31a3a7c792"
          />
        )}
      </body>
    </html>
  )
}

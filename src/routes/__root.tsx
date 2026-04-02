import type { ReactNode } from 'react'
import { Outlet, HeadContent, Scripts, Navigate } from '@tanstack/react-router'
import { createRootRouteWithContext } from '@tanstack/react-router'
import type { RouterContext } from '@/router'
import { defaultHead } from '@/util/seo'
import { PostHogProvider } from 'posthog-js/react'

const isDev = import.meta.env.DEV

export const Route = createRootRouteWithContext<RouterContext>()({
  head: defaultHead,
  component: RootComponent,
  notFoundComponent: () => {
    return Navigate({ to: '/' })
  }
})

function AppWrapper({ children }: { children: React.ReactNode }) {
  const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN
  const api_host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST

  const app =
    !isDev && apiKey ? (
      <PostHogProvider
        apiKey={apiKey}
        options={{
          api_host,
          defaults: '2026-01-30'
        }}
      >
        {children}
      </PostHogProvider>
    ) : (
      children
    )

  return (
    <>
      {/* The actual app, with or without Posthog */}
      {app}

      {/* Regular scripts */}
      <Scripts />
    </>
  )
}

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
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}

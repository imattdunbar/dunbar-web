import { createRouter as createTanStackRouter, Navigate } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import { routeTree } from './routeTree.gen'

export const queryClient = new QueryClient()

export type RouterContext = {
  queryClient: QueryClient
}

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    scrollRestoration: true,
    notFoundMode: 'root',
    defaultErrorComponent: () => Navigate({ to: '/' }),
    defaultPendingComponent: () => <>Loading...</>
  })

  setupRouterSsrQueryIntegration({
    router,
    queryClient
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

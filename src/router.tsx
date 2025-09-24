import { createRouter, Navigate } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { routeTree } from './routeTree.gen'

export const queryClient = new QueryClient()

export type RouterContext = {
  queryClient: QueryClient
}

export function getRouter() {
  const router = createRouter({
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

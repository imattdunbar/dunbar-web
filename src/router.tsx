import { createRouter, Navigate } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { routeTree } from './routeTree.gen'

export type RouterContext = {
  queryClient: QueryClient
}

export function getRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Keep data fresh for 30 seconds to avoid an immediate refetch after SSR hydration.
        staleTime: 30_000
      }
    }
  })

  const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    // Let QueryClient decide if a preload needs fresh data instead of the router cache.
    defaultPreloadStaleTime: 0,
    scrollRestoration: true,
    notFoundMode: 'root',
    defaultViewTransition: true,
    defaultNotFoundComponent: () => <Navigate to="/" replace />,
    defaultErrorComponent: () => <Navigate to="/" replace />,
    defaultPendingComponent: () => <>Loading...</>
  })

  setupRouterSsrQueryIntegration({
    router,
    queryClient
  })

  return router
}

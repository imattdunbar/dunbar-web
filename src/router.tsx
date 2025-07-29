import { createRouter as createTanStackRouter, Navigate } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'

export const queryClient = new QueryClient()

export type RouterContext = {
  queryClient: QueryClient
}

export function createRouter() {
  return routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      context: { queryClient },
      defaultPreload: 'intent',
      notFoundMode: 'root',
      defaultErrorComponent: () => Navigate({ to: '/' }),
      defaultPendingComponent: () => <>Loading...</>
    }),
    queryClient
  )
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

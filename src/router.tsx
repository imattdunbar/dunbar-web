import { createRouter as createTanStackRouter, Navigate } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export type RouterContext = {
  queryClient: QueryClient
}

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    notFoundMode: 'root',
    defaultErrorComponent: () => Navigate({ to: '/' }),
    defaultPendingComponent: () => <>Loading...</>
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

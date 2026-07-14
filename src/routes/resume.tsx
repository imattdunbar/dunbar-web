import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  beforeLoad: () => {
    throw redirect({
      to: '/MattDunbar_Resume.pdf' as any,
      replace: true
    })
  }
})

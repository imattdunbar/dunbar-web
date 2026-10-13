import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  beforeLoad: () => {
    throw redirect({
      href: '/MattDunbar_Resume.pdf',
      replace: true
    })
  }
})

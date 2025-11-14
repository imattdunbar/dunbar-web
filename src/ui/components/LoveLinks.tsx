import { openLinkInNewTab } from '@/util/browser'
import { Popover } from 'radix-ui'
import { useState } from 'react'
import { FaGithub, FaHeart } from 'react-icons/fa'

const LoveLinks = () => {
  const [open, setOpen] = useState(false)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <div className="flex h-full w-full items-center justify-center pb-4 text-white">
          <div className="flex items-center rounded-lg px-4 py-2 hover:bg-zinc-800">
            <p>Made with</p>
            <img src="https://tanstack.com/favicon.ico" alt="Tanstack Logo" className="mx-1 size-5" />

            <p>and</p>
            <FaHeart className="mx-1 size-5 text-red-400" />
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="flex w-fit flex-col gap-1 rounded-lg bg-zinc-950 p-4 text-white"
          side="top"
          sideOffset={12}
        >
          <Popover.Arrow />
          <div
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 select-none hover:bg-slate-900"
            onClick={() => {
              openLinkInNewTab('https://github.com/imattdunbar/dunbar-web', () => {
                setOpen(false)
              })
            }}
          >
            <FaGithub className="size-5" />
            Open repo for this site
          </div>
          <div
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 select-none hover:bg-slate-900"
            onClick={() => {
              openLinkInNewTab('https://tanstack.com/start', () => {
                setOpen(false)
              })
            }}
          >
            <img src="https://tanstack.com/favicon.ico" alt="Tanstack Logo" className="size-5" />
            TanStack Start
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default LoveLinks

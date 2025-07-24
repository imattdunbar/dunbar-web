import { createFileRoute } from '@tanstack/react-router'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import LoveLinks from '@/ui/components/LoveLinks'
import { openLinkInNewTab } from '@/util/browser'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="mx-auto flex h-full min-h-dvh w-full max-w-7xl min-w-[375px] flex-col items-center justify-center overflow-hidden overscroll-y-none">
      <div className="flex w-fit flex-col items-center justify-center rounded-lg text-neutral-300">
        <img src="/images/avatar.webp" alt="Profile Picture" className="h-64 w-64 rounded-full select-none" />

        <div className="flex gap-2 p-4 text-xs select-none md:text-base">
          <div
            className="flex w-fit transform items-center justify-center gap-2 rounded-lg bg-zinc-950 px-2 py-1 font-semibold transition duration-200 hover:scale-105 active:scale-90"
            onClick={() => {
              openLinkInNewTab('https://mattdunbar.io/resume')
            }}
          >
            <IoDocumentTextOutline aria-hidden="true" className="size-8" />
            <h2>Resume</h2>
          </div>

          <div
            className="flex w-fit transform items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 font-semibold transition duration-200 hover:scale-105 active:scale-90"
            onClick={() => {
              openLinkInNewTab('https://github.com/imattdunbar')
            }}
          >
            <FaGithub aria-hidden="true" className="size-8" />
            <h2>Github</h2>
          </div>

          <div
            className="flex w-fit transform items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 font-semibold transition duration-200 hover:scale-105 active:scale-90"
            onClick={() => {
              openLinkInNewTab('https://linkedin.com/in/imattdunbar')
            }}
          >
            <FaLinkedin aria-hidden="true" className="size-8" />
            <h2>LinkedIn</h2>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 flex w-full items-center justify-center font-bold select-none">
        <LoveLinks />
      </footer>
    </div>
  )
}

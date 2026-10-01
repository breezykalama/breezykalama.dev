import type { ReactNode } from 'react'
import { MotionConfig } from 'motion/react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <a href="#top" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-accent px-4 py-3 text-sm font-medium text-zinc-950 focus:translate-y-0">Skip to content</a>
        <Navbar />
        <main id="top" tabIndex={-1} className="outline-none">{children}</main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

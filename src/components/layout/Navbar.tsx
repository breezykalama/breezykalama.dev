import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { NAV_ITEMS, SITE } from '../../lib/constants'
import { Button } from '../ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <span className="grid size-9 place-items-center rounded-md bg-cyan-300 text-sm font-black text-slate-950">
            B
          </span>
          <span className="max-w-40 text-sm font-semibold leading-tight text-white sm:max-w-none">
            {SITE.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#contact" variant="secondary" className="min-h-10 px-4">
            Work with me
          </Button>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-slate-200 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={clsx(
          'border-t border-white/10 px-4 pb-4 shadow-2xl shadow-slate-950/40 md:hidden',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 pt-3">
          {NAV_ITEMS.map((item) => (
            <a
              className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

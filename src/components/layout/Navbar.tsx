import { useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS, SITE } from '../../lib/constants'
import { Button } from '../ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#111113]/95"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
    >
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6" aria-label="Main navigation">
        <a href="#top" className="flex min-h-11 shrink-0 items-center gap-3" aria-label={`${SITE.name} home`} onClick={() => setIsOpen(false)}>
          <img src="/favicon.png" alt="" className="size-8 rounded object-cover" width="32" height="32" decoding="async" />
          <span className="text-sm font-medium text-zinc-100 sm:text-base">{SITE.name}</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => <a className="text-link" href={item.href} key={item.href}>{item.label}</a>)}
        </div>
        <div className="hidden lg:block">
          <Button href="#contact" variant="secondary">Get in touch</Button>
        </div>
        <button
          ref={menuButtonRef}
          className="grid size-11 shrink-0 place-items-center rounded-md text-zinc-300 transition hover:bg-white/5 lg:hidden"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>
      <div id="mobile-navigation" className={`border-t border-white/10 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="section-shell grid gap-1 py-4" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <a className="text-link rounded px-2 hover:bg-white/5" href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>
          ))}
          <a className="text-link rounded px-2 font-medium text-accent" href="#contact" onClick={() => setIsOpen(false)}>Get in touch</a>
        </nav>
      </div>
    </header>
  )
}

import { SITE } from '../../lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell">
        <p className="max-w-xl text-xs leading-6 text-zinc-400">
          {'\u00a9'} 2026 {SITE.name}. AI Engineering, Backend Systems &amp; Enterprise Solutions.
        </p>
      </div>
    </footer>
  )
}

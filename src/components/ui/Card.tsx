import type { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur transition duration-300 hover:border-white/16 hover:bg-white/[0.06] sm:p-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

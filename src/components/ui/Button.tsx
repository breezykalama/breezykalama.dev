import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost'

type SharedProps = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-cyan-300 text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.24)] hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_48px_rgba(103,232,249,0.32)]',
  secondary:
    'border border-white/12 bg-white/[0.07] text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.11]',
  ghost: 'text-slate-300 hover:bg-white/[0.06] hover:text-white',
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  const classes = clsx(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    variantClasses[variant],
    className,
  )

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={classes} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  )
}

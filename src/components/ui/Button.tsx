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
    'bg-accent text-zinc-950 hover:bg-[#c1e3d9]',
  secondary:
    'border border-white/15 bg-transparent text-zinc-200 hover:border-white/30 hover:bg-white/[0.04]',
  ghost: 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]',
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  const classes = clsx(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-150',
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

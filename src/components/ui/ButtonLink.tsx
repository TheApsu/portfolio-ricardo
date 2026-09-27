import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'ink' | 'secondary'

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: Variant
  icon?: ReactNode
  external?: boolean
}

const base =
  'inline-flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink hover:bg-accent-hover',
  ink: 'bg-ink text-canvas hover:bg-ink/85',
  secondary: 'border border-hairline-strong text-ink hover:border-ink-subtle hover:bg-surface-sunk',
}

export function ButtonLink({
  variant = 'secondary',
  icon,
  external = false,
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}

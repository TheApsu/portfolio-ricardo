import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { easeOutExpo } from '../../lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fades and lifts its content once it scrolls into view. Static under reduced motion. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <m.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: easeOutExpo }}
    >
      {children}
    </m.div>
  )
}

import { ArrowDown, EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react'
import { m, useReducedMotion, type Variants } from 'motion/react'
import { profile } from '../data/cv'
import { easeOutExpo } from '../lib/motion'
import restyPhone from '../assets/resty/resty-phone.webp'
import { ButtonLink } from './ui/ButtonLink'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
}

export function Hero() {
  const reduce = useReducedMotion()
  const initial = reduce ? false : 'hidden'

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="wrap grid items-center gap-12 pt-10 pb-4 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-8"
    >
      <m.div className="lg:col-span-7" variants={container} initial={initial} animate="show">
        <m.p variants={item} className="flex items-center gap-2.5 text-sm font-medium text-ink-muted">
          <span aria-hidden className="size-2 rounded-full bg-accent" />
          {profile.availability}
        </m.p>

        <m.h1 id="hero-title" variants={item} translate="no" className="mt-6 text-display">
          {profile.name}
        </m.h1>

        <m.p variants={item} className="mt-6 text-lead text-ink-muted">
          <span className="font-medium text-ink">{profile.role}</span>{' '}
          <span className="text-ink-subtle">|</span>{' '}
          {/* Keep the stack together so the line breaks after the pipe, not mid-list. */}
          <span translate="no" className="inline-block">
            {profile.stack}
          </span>
        </m.p>

        <m.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <ButtonLink
            variant="primary"
            href={`mailto:${profile.email}`}
            icon={<EnvelopeSimple size={18} weight="bold" aria-hidden />}
          >
            Email Me
          </ButtonLink>
          <ButtonLink
            href={profile.linkedin}
            external
            icon={<LinkedinLogo size={18} weight="fill" aria-hidden />}
          >
            LinkedIn
          </ButtonLink>
        </m.div>
      </m.div>

      <m.figure
        className="lg:col-span-5"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: easeOutExpo }}
      >
        <div className="flex h-[400px] items-center justify-center overflow-hidden rounded-[var(--radius-panel)] bg-accent-soft sm:h-[480px] lg:h-[540px]">
          <img
            src={restyPhone}
            width={474}
            height={842}
            fetchPriority="high"
            alt="Resty app onboarding screen on an iPhone, showing a map with restroom pins."
            className="h-[92%] w-auto translate-y-[4%]"
          />
        </div>
        <figcaption className="mt-3 text-sm text-ink-muted">
          <a
            href="#resty"
            className="group inline-flex items-center gap-1.5 rounded-full py-1 transition-colors duration-150 hover:text-ink"
          >
            <span>
              <span translate="no">Resty</span>, a restroom finder app on iOS and Android
            </span>
            <ArrowDown
              size={14}
              weight="bold"
              aria-hidden
              className="transition-transform duration-150 group-hover:translate-y-0.5"
            />
          </a>
        </figcaption>
      </m.figure>
    </section>
  )
}

import { AppleLogo, ArrowUpRight, GooglePlayLogo } from '@phosphor-icons/react'
import { resty } from '../data/cv'
import restyCard from '../assets/resty/resty-card.webp'
import restyLogo from '../assets/resty/resty-logo.svg'
import restyMap from '../assets/resty/resty-map.webp'
import { ButtonLink } from './ui/ButtonLink'
import { Reveal } from './ui/Reveal'

export function FeaturedProject() {
  return (
    <section id="resty" aria-labelledby="resty-heading" className="wrap py-20 lg:py-24">
      <Reveal>
        <h2 id="resty-heading" className="text-headline">
          Featured Project
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 lg:mt-14">
        <article className="relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-hairline bg-surface">
          {/* Resty's own city-map art. Inverted and dimmed in dark mode so it reads as a dark map. */}
          <img
            src={restyMap}
            width={2880}
            height={1794}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute inset-0 -z-10 size-full object-cover object-[80%_center] dark:opacity-35 dark:invert"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-surface/75 lg:bg-transparent lg:bg-linear-to-r lg:from-surface lg:from-35% lg:via-surface/80 lg:to-surface/0"
          />

          <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-14">
            <div className="lg:col-span-7">
              <h3>
                <img
                  src={restyLogo}
                  width={218}
                  height={62}
                  loading="lazy"
                  alt={resty.name}
                  className="h-11 w-auto dark:invert"
                />
              </h3>
              <p className="mt-3 font-mono text-[13px] text-ink-subtle">{resty.tagline}</p>

              <p className="mt-8 max-w-[52ch] text-lead text-pretty">{resty.description}</p>

              <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 text-sm sm:grid-cols-2 sm:max-w-md">
                <div>
                  <dt className="text-ink-subtle">Role</dt>
                  <dd className="mt-1 font-medium">{resty.role}</dd>
                </div>
                <div>
                  <dt className="text-ink-subtle">Timeline</dt>
                  <dd className="mt-1 font-mono text-[13px]">{resty.period}</dd>
                </div>
              </dl>

              <ul className="mt-8 max-w-[60ch] list-disc space-y-2 pl-5 text-ink-muted marker:text-ink-subtle">
                {resty.bullets.map((bullet) => (
                  <li key={bullet} className="pl-1 text-pretty">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink
                  href={resty.links.appStore}
                  external
                  variant="ink"
                  icon={<AppleLogo size={18} weight="fill" aria-hidden />}
                >
                  App Store
                </ButtonLink>
                <ButtonLink
                  href={resty.links.googlePlay}
                  external
                  variant="ink"
                  icon={<GooglePlayLogo size={18} weight="fill" aria-hidden />}
                >
                  Google Play
                </ButtonLink>
                <ButtonLink
                  href={resty.links.website}
                  external
                  icon={<ArrowUpRight size={18} weight="bold" aria-hidden />}
                >
                  app-resty.com
                </ButtonLink>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-5">
              <img
                src={restyCard}
                width={348}
                height={378}
                loading="lazy"
                alt="Resty restroom detail card with a photo, open-now status, 4.0 rating, and distance."
                className="mx-auto w-[min(100%,260px)] sm:w-[min(100%,300px)] lg:mr-0"
              />

              <div className="grid grid-cols-2 gap-6 border-t border-hairline pt-8">
                <p className="col-span-2 -mb-2 font-mono text-[13px] text-ink-subtle">Since launch</p>
                {resty.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-figure">{stat.value}</p>
                    <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <ul aria-label="Resty stack" className="flex flex-wrap gap-2">
                {resty.stack.map((tech) => (
                  <li
                    key={tech}
                    translate="no"
                    className="rounded-full bg-surface-sunk px-3 py-1.5 text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  )
}

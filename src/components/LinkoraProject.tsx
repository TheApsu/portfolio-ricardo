import { ArrowUpRight } from '@phosphor-icons/react'
import { linkora } from '../data/cv'
import linkoraLogoBlue from '../assets/linkora/linkora-logo-blue.png'
import linkoraLogoWhite from '../assets/linkora/linkora-logo-white.png'
import linkoraTags from '../assets/linkora/linkora-tags.webp'
import { ButtonLink } from './ui/ButtonLink'
import { Reveal } from './ui/Reveal'

export function LinkoraProject() {
  return (
    <Reveal delay={0.05} className="mt-8 lg:mt-10">
      <article
        id="linkora"
        aria-label={linkora.name}
        className="overflow-hidden rounded-[var(--radius-panel)] border border-hairline bg-surface"
      >
        <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-14">
          <div className="lg:col-span-7">
            <h3>
              <img
                src={linkoraLogoBlue}
                width={560}
                height={134}
                loading="lazy"
                alt={linkora.name}
                className="h-10 w-auto dark:hidden"
              />
              <img
                src={linkoraLogoWhite}
                width={560}
                height={134}
                loading="lazy"
                alt=""
                aria-hidden
                className="hidden h-10 w-auto dark:block"
              />
            </h3>
            <p className="mt-3 font-mono text-[13px] text-ink-subtle">{linkora.tagline}</p>

            <p className="mt-8 max-w-[52ch] text-lead text-pretty">{linkora.description}</p>

            <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 text-sm sm:grid-cols-2 sm:max-w-md">
              <div>
                <dt className="text-ink-subtle">Role</dt>
                <dd className="mt-1 font-medium">{linkora.role}</dd>
              </div>
              <div>
                <dt className="text-ink-subtle">Timeline</dt>
                <dd className="mt-1 font-mono text-[13px]">{linkora.period}</dd>
              </div>
            </dl>

            <ul className="mt-8 max-w-[60ch] list-disc space-y-2 pl-5 text-ink-muted marker:text-ink-subtle">
              {linkora.bullets.map((bullet) => (
                <li key={bullet} className="pl-1 text-pretty">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink
                href={linkora.links.website}
                external
                variant="ink"
                icon={<ArrowUpRight size={18} weight="bold" aria-hidden />}
              >
                linkorasoftware.com
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-5">
            <img
              src={linkoraTags}
              width={720}
              height={853}
              loading="lazy"
              alt="Linkora electronic shelf labels showing product prices on a store shelf."
              className="mx-auto w-[min(100%,300px)] rounded-[calc(var(--radius-panel)/2)] sm:w-[min(100%,340px)] lg:mr-0"
            />

            <ul aria-label="Linkora stack" className="flex flex-wrap gap-2">
              {linkora.stack.map((tech) => (
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
  )
}

import { experience, profile } from '../data/cv'
import { Reveal } from './ui/Reveal'
import { RichText } from './ui/RichText'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="wrap py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-[calc(var(--nav-height)+3rem)]">
            <h2 id="experience-heading" className="text-headline">
              Experience
            </h2>
            <p className="mt-5 max-w-[30ch] text-lead text-pretty text-ink-muted">{profile.summary}</p>
          </Reveal>
        </div>

        <ol className="space-y-14 lg:col-span-8 lg:space-y-16">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal>
                <article className="grid gap-3 md:grid-cols-[168px_minmax(0,1fr)] md:gap-8">
                  <p className="font-mono text-[13px] leading-relaxed text-ink-muted md:pt-1">{job.period}</p>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight text-balance">{job.title}</h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span translate="no" className="font-medium text-ink-muted">
                        {job.company}
                      </span>
                      {job.type && <span className="font-mono text-[13px] text-ink-subtle">{job.type}</span>}
                      {job.periodNote && (
                        <span className="font-mono text-[13px] text-ink-subtle">{job.periodNote}</span>
                      )}
                      {job.current && (
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                          Current
                        </span>
                      )}
                    </p>

                    <ul className="mt-5 list-disc space-y-2.5 pl-5 text-ink-muted marker:text-ink-subtle">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="pl-1 text-pretty">
                          <RichText text={bullet} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

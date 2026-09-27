import { useEffect, useState } from 'react'
import { Check, Copy, DownloadSimple, LinkedinLogo, MapPin, Phone } from '@phosphor-icons/react'
import { profile } from '../data/cv'
import { ButtonLink } from './ui/ButtonLink'
import { Reveal } from './ui/Reveal'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard can be blocked (insecure origin, permissions); the mailto link still works.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-ink-muted transition-[background-color,border-color,color,transform] duration-150 hover:border-ink-subtle hover:bg-surface-sunk hover:text-ink active:scale-[0.96]"
      >
        {copied ? <Check size={18} weight="bold" aria-hidden /> : <Copy size={18} aria-hidden />}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email address copied' : ''}
      </span>
    </>
  )
}

const linkClass =
  'inline-flex items-center gap-2 rounded-full py-2 text-ink-muted transition-colors duration-150 hover:text-ink'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="wrap py-24 text-center lg:py-28">
      <Reveal>
        <h2 id="contact-heading" className="text-headline">
          Contact
        </h2>
        <p className="mx-auto mt-5 max-w-[40ch] text-lead text-pretty text-ink-muted">
          Open to remote roles. Based in {profile.location} (UTC-4).
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 flex items-end justify-center gap-3 sm:items-center">
        <a
          href={`mailto:${profile.email}`}
          className="min-w-0 text-[clamp(1.25rem,0.7rem+2.2vw,2.5rem)] leading-snug font-semibold tracking-tight break-words underline decoration-hairline-strong decoration-2 underline-offset-[0.25em] transition-[text-decoration-color] duration-150 hover:decoration-accent"
        >
          {/* Allow a line break only before the @ on narrow screens. */}
          {profile.email.split('@')[0]}
          <wbr />@{profile.email.split('@')[1]}
        </a>
        <CopyEmailButton />
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-1 sm:flex-row sm:flex-wrap">
          <li>
            <a href={profile.phoneHref} className={linkClass}>
              <Phone size={18} aria-hidden />
              <span className="tabular-nums">{profile.phone}</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <LinkedinLogo size={18} aria-hidden />
              <span>{profile.linkedinLabel}</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li className="inline-flex items-center gap-2 py-2 text-ink-muted">
            <MapPin size={18} aria-hidden />
            <span>{profile.location}</span>
          </li>
        </ul>

        <div className="mt-12 flex flex-col items-center gap-3">
          <ButtonLink
            variant="primary"
            href={`${import.meta.env.BASE_URL}${profile.cvFile}`}
            download={profile.cvFile}
            icon={<DownloadSimple size={18} weight="bold" aria-hidden />}
          >
            Download CV
          </ButtonLink>
          <p className="font-mono text-[13px] text-ink-subtle">PDF, 2 pages</p>
        </div>
      </Reveal>
    </section>
  )
}

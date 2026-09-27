import { DownloadSimple } from '@phosphor-icons/react'
import { profile } from '../data/cv'
import { ButtonLink } from './ui/ButtonLink'

const links = [
  { href: '#resty', label: 'Resty' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          translate="no"
          className="-mx-2 rounded-full px-2 py-2 text-[15px] font-semibold tracking-tight"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Sections" className="hidden lg:block">
            <ul className="flex items-center">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-3 py-2 text-sm text-ink-muted transition-colors duration-150 hover:bg-surface-sunk hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink
            href={`${import.meta.env.BASE_URL}${profile.cvFile}`}
            download={profile.cvFile}
            icon={<DownloadSimple size={18} weight="bold" aria-hidden />}
          >
            Download CV
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}

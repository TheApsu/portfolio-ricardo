import { profile } from '../data/cv'

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="wrap flex flex-col gap-2 py-8 text-sm text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} <span translate="no">{profile.name}</span>
        </p>
        <p>Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}

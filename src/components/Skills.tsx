import type { Icon } from '@phosphor-icons/react'
import { Browser, Cloud, Code, Database, DeviceMobile, HardDrives, Kanban } from '@phosphor-icons/react'
import { skills, type SkillGroup } from '../data/cv'
import { Reveal } from './ui/Reveal'

// Bento spans: 7 cells for the 7 CV groups, three rows of varied widths on lg (7/5, 5/4/3, 5/7).
const cells: Record<SkillGroup['id'], { icon: Icon; span: string; tone?: 'accent' | 'sunk' }> = {
  languages: { icon: Code, span: 'md:col-span-2 lg:col-span-7' },
  frontend: { icon: Browser, span: 'lg:col-span-5' },
  mobile: { icon: DeviceMobile, span: 'lg:col-span-5', tone: 'accent' },
  backend: { icon: HardDrives, span: 'lg:col-span-4' },
  databases: { icon: Database, span: 'lg:col-span-3' },
  cloud: { icon: Cloud, span: 'lg:col-span-5', tone: 'sunk' },
  tools: { icon: Kanban, span: 'md:col-span-2 lg:col-span-7' },
}

const tones = {
  default: { cell: 'border-hairline bg-surface', icon: 'text-ink-subtle', chip: 'bg-surface-sunk' },
  accent: { cell: 'border-transparent bg-accent-soft', icon: 'text-accent', chip: 'bg-surface' },
  sunk: { cell: 'border-transparent bg-surface-sunk', icon: 'text-ink-subtle', chip: 'bg-surface' },
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="wrap py-20 lg:py-24">
      <Reveal>
        <h2 id="skills-heading" className="text-headline">
          Skills
        </h2>
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-4">
        {skills.map((group, i) => {
          const cell = cells[group.id]
          const tone = tones[cell.tone ?? 'default']
          const GroupIcon = cell.icon

          return (
            <li key={group.id} className={cell.span}>
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <div className={`h-full rounded-[var(--radius-panel)] border p-6 lg:p-8 ${tone.cell}`}>
                  <div className="flex items-center gap-3">
                    <GroupIcon size={22} weight="duotone" aria-hidden className={tone.icon} />
                    <h3 className="text-base font-semibold tracking-tight">{group.label}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        translate="no"
                        className={`rounded-full px-3 py-1.5 text-sm font-medium ${tone.chip}`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

import { certifications, courses } from '../data/cv'
import { Reveal } from './ui/Reveal'

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="wrap py-20 lg:py-24">
      <Reveal>
        <h2 id="certifications-heading" className="text-headline">
          Certifications
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="mt-10 grid border-y border-hairline md:grid-cols-3 lg:mt-14">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="border-t border-hairline py-8 first:border-t-0 md:border-t-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0 lg:px-10"
            >
              <p className="text-figure">{cert.figure}</p>
              <p className="mt-2 text-sm text-ink-muted">{cert.unit}</p>
              <p className="mt-8 text-lg font-semibold tracking-tight" translate="no">
                {cert.name}
              </p>
              <p className="mt-1 text-sm text-ink-subtle">{cert.issuer}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <h3 className="text-sm font-medium text-ink-subtle">Courses</h3>
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.name} className="flex flex-col gap-1">
              <span className="font-medium">{course.name}</span>
              <span className="font-mono text-[13px] text-ink-subtle">
                {course.issuer}, {course.year}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

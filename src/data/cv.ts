// Single source of content for the site. Every value here comes from
// Ricardo_Duque_CV.pdf; do not add roles, numbers, or skills that are not in it.
// `**text**` marks a metric that is rendered with emphasis.

export const profile = {
  name: 'Ricardo Duque',
  role: 'Full Stack & Mobile Developer',
  stack: 'Flutter, React.js, Next.js, Node.js',
  availability: 'Open to remote, UTC-4',
  location: 'Táchira, Venezuela',
  summary: 'Nearly 5 years building and shipping web and mobile products.',
  email: 'ricardoduque.programador@gmail.com',
  phone: '+58 424 721 8207',
  phoneHref: 'tel:+584247218207',
  linkedin: 'https://www.linkedin.com/in/ricardo-duque-dev/',
  linkedinLabel: 'linkedin.com/in/ricardo-duque-dev',
  cvFile: 'Ricardo_Duque_CV.pdf',
} as const

export const resty = {
  name: 'Resty',
  tagline: 'Restroom Finder App',
  role: 'Co-founder & Lead Developer',
  period: 'May 2026 - Present',
  description:
    'A community app that helps people find clean restrooms nearby, published on the App Store and Google Play.',
  bullets: [
    'Co-founded Resty and took the product from design to store release.',
    'Developed the Flutter mobile app, a Next.js website, and a Node.js/Express REST API backed by PostgreSQL.',
  ],
  stats: [
    { value: '120', label: 'downloads' },
    { value: '110', label: 'users' },
  ],
  stack: ['Flutter', 'Next.js', 'Node.js', 'Express', 'PostgreSQL'],
  links: {
    appStore: 'https://apps.apple.com/app/resty-restrooms/id6795996046',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.appresty.resty',
    website: 'https://www.app-resty.com/',
  },
} as const

export type Job = {
  title: string
  company: string
  type?: 'Freelance' | 'Part-time'
  period: string
  periodNote?: string
  current?: boolean
  bullets: string[]
}

export const experience: Job[] = [
  {
    title: 'Full Stack & Mobile Developer',
    company: 'HT DEVS',
    period: 'Jun 2024 - Present',
    current: true,
    bullets: [
      'Shipped **9 cross-platform mobile and web applications** serving **~1,000 users** combined, using Ionic, Capacitor, React.js, Next.js, and Vue.js.',
      'Built and integrated backend services, databases, and cloud infrastructure with Ruby on Rails, TypeScript, Supabase, PHP, MySQL, and Google Cloud.',
      'Ran task allocation, backlog grooming, and sprint planning for a **4-person team** delivering 9 apps, and guided other developers on API structure.',
    ],
  },
  {
    title: 'Full Stack & Mobile Developer',
    company: 'Florida Sand & Gravel LLC',
    type: 'Freelance',
    period: 'Jul 2025 - May 2026',
    bullets: [
      'Built and published a Flutter app for iOS and Android that **400+ drivers** used to receive, track, and complete **~2,000 orders per day**.',
      'Developed the web administration dashboard with Next.js, TypeScript, Node.js, and Express to create and manage orders.',
      'Owned the integration between the driver app, dashboard, and backend, from API design to production deployment.',
    ],
  },
  {
    title: 'Full Stack Developer & DevOps',
    company: 'WAOK',
    period: 'Aug 2025 - Feb 2026',
    bullets: [
      'Built a Flutter mobile app, **deployed at a hospital**, that lets staff submit service requests and monitor operations in real time.',
      'Developed an administrative dashboard with Next.js, TypeScript, and PHP/Laravel to manage requests and internal workflows.',
      'Managed cloud infrastructure and deployments on AWS, Google Cloud, Docker, Linux, and Cloudflare for the hospital platform.',
    ],
  },
  {
    title: 'Frontend Developer (Web & Mobile)',
    company: 'Grupo Neuron',
    period: 'Dec 2021 - Oct 2023',
    periodNote: 'Full-time, then freelance through May 2025',
    bullets: [
      'Contributed to Web Factory, the company’s in-house CMS, used to speed up delivery of client web products.',
      'Led frontend development of web and mobile features with Angular and React.js within a **7-person team**.',
      'Built mobile apps with Ionic, Capacitor, and Cordova, and backend features with TypeScript and Node.js.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Ai Dev Pro',
    type: 'Part-time',
    period: 'Aug 2023 - Jun 2024',
    bullets: ['Built layouts for custom WordPress themes using HTML, CSS, and JavaScript.'],
  },
  {
    title: 'Mobile Developer',
    company: 'Riidelt',
    period: 'Dec 2023 - Feb 2024',
    bullets: [
      'Developed features for a ride-hailing (passenger transport) app on iOS and Android using Angular, Ionic, Capacitor, Cordova, and TypeScript.',
      'Translated Figma designs into iOS and Android interfaces and built new modules for the app’s **~30 users**.',
      'Handled admin-side development alongside mobile work and organized development sprints.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Dick Clark Real Estate',
    type: 'Freelance',
    period: 'Apr 2023 - May 2023',
    bullets: [
      'Delivered a full-stack web application from concept to production, owning backend development and architecture.',
      'Built the solution with TypeScript, Angular, Node.js, and MySQL.',
      'Managed client communication, requirements gathering, and the delivery timeline.',
    ],
  },
]

export type SkillGroup = {
  id: 'languages' | 'frontend' | 'mobile' | 'backend' | 'databases' | 'cloud' | 'tools'
  label: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Dart', 'PHP', 'Ruby', 'SQL', 'HTML', 'CSS/SCSS'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'WordPress'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: ['Flutter', 'Ionic', 'Capacitor', 'Cordova', 'iOS', 'Android', 'App Store and Google Play publishing'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express', 'Ruby on Rails', 'Laravel', 'REST APIs'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'MongoDB'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud', 'Docker', 'Linux', 'Cloudflare'],
  },
  {
    id: 'tools',
    label: 'Tools & Methods',
    items: ['Git/GitHub', 'Jira', 'Trello', 'Figma', 'Agile/Scrum', 'Claude Code (AI-assisted development)'],
  },
]

export const certifications = [
  { figure: '98th', unit: 'percentile', name: 'Node.js', issuer: 'TestGorilla' },
  { figure: '97th', unit: 'percentile', name: 'React', issuer: 'TestGorilla' },
  { figure: 'B2', unit: 'Upper Intermediate', name: 'EF SET English Certificate', issuer: 'EF Standard English Test' },
] as const

export const courses = [
  { name: 'Advanced React + TypeScript', issuer: 'Udemy', year: '2025' },
  { name: 'Ionic Framework Mobile Development', issuer: 'Udemy', year: '2022' },
  { name: 'Professional Web Developer', issuer: 'Platzi', year: '2021' },
] as const

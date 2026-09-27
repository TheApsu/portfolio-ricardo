import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { FeaturedProject } from './components/FeaturedProject'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to Content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <FeaturedProject />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}

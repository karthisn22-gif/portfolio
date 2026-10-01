import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { initMotion } from './animations/motion.js'
import Hero from './sections/Hero.jsx'
import Marquee from './sections/Marquee.jsx'
import About from './sections/About.jsx'
import Stack from './sections/Stack.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Achievements from './sections/Achievements.jsx'
import Education from './sections/Education.jsx'
import Certifications from './sections/Certifications.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  useEffect(() => { initMotion() }, [])
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

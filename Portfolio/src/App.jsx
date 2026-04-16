import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <div className="grid-bg" />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
    </>
  )
}

import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiFileText } from 'react-icons/fi'
import './Hero.css'

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'IIT Ropar CSE Student',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" className="hero-section">
      {/* Ambient blobs */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />
      <div className="hero-blob blob-3" />

      <div className="container hero-container">
        {/* LEFT — text content */}
        <div className="hero-left">
          <div className="hero-badge animate-fade-up">
            <span className="badge-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Ayush 
            <br />
            <span className="gradient-text">Sonika</span>
          </h1>

          <div className="hero-role animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="role-prefix">{'> '}</span>
            <span className="role-text">{displayed}</span>
            <span className="cursor" />
          </div>

          <p className="hero-description animate-fade-up" style={{ animationDelay: '0.3s' }}>
            B.Tech Computer Science Engineering student at{' '}
            <span className="highlight">IIT Ropar</span>, building scalable
            full-stack applications and solving complex algorithmic problems.
            Passionate about clean code, system design, and impactful software.
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn-primary">
              View Projects
              <FiArrowDown style={{ strokeWidth: 2.5 }} />
            </a>
            <a href="/AyushResumeCorrectedFinal.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FiFileText style={{ marginRight: '8px' }} />
              Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/Ayush-1574"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-sonika-581b5524b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:ayushsonika1@gmail.com"
              className="social-icon"
              title="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* RIGHT — photo + terminal */}
        <div className="hero-right animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="photo-wrapper">
            <div className="photo-ring" />
            <div className="photo-glow" />
            <img
              src="/image.jpg"
              alt="Ayush Sonika"
              className="hero-photo"
            />
            <div className="photo-badge">
              <span className="photo-badge-dot" />
              IIT Ropar
            </div>
          </div>

          {/* Terminal card */}
          <div className="hero-terminal">
            <div className="terminal-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">Ayush@iit-ropar ~ $</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-cmd">const</span> <span className="t-var">engineer</span> = &#123;</p>
              <p>&nbsp;&nbsp;<span className="t-key">stack</span>: [<span className="t-str">"React"</span>, <span className="t-str">"Node.js"</span>, <span className="t-str">"C++"</span>],</p>
              <p>&nbsp;&nbsp;<span className="t-key">status</span>: <span className="t-str">"Building cool things 🚀"</span></p>
              <p>&#125;</p>
            </div>
          </div>
        </div>
      </div>

      <a href="#skills" className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </a>
    </section>
  )
}

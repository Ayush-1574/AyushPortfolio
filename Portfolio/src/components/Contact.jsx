import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiFileText } from 'react-icons/fi'
import './Contact.css'

const contactLinks = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'ayushsonika1@gmail.com',
    href: 'mailto:ayushsonika1@gmail.com',
    color: 'cyan',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91-7878631803',
    href: 'tel:+917878631803',
    color: 'purple',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/Ayush-1574',
    href: 'https://github.com/Ayush-1574',
    color: 'cyan',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ayush-sonika-581b5524b/',
    href: 'https://www.linkedin.com/in/ayush-sonika-581b5524b/',
    color: 'purple',
  },
  {
    icon: <FiFileText />,
    label: 'Resume',
    value: 'Download / View CV',
    href: '/AyushResumeCorrectedFinal.pdf',
    color: 'cyan',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-blob" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Let's connect</span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
        </div>

        <div className="contact-layout">
          <div className="contact-left">
            <p className="contact-intro">
              I'm currently open to internship opportunities and exciting projects.
              Whether you have a role in mind, want to collaborate, or just want
              to say hi — my inbox is always open.
            </p>

            <div className="contact-terminal">
              <div className="terminal-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">connect.sh</span>
              </div>
              <div className="terminal-body">
                <p><span className="t-cmd">$</span> <span className="t-str">open</span> opportunities</p>
                <p className="t-output">✓ Internships</p>
                <p className="t-output">✓ Part-time Projects</p>
                <p className="t-output">✓ Open Source Collab</p>
                <p className="t-output">✓ Tech Discussions</p>
                <p><span className="t-cmd">$</span> <span className="t-cursor-line">_</span></p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-card card contact-${link.color}`}
                >
                  <div className={`contact-icon icon-${link.color}`}>
                    {link.icon}
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">{link.label}</span>
                    <span className="contact-value">{link.value}</span>
                  </div>
                  <FiSend className="contact-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer">
          <p className="footer-text">
            Designed & Built by{' '}
            <span className="gradient-text footer-name">Ayush Sonika</span>
            {' '}· IIT Ropar © 2025
          </p>
          <p className="footer-sub">
            <span className="footer-code">{'<'}</span>
            Crafted with React.js
            <span className="footer-code">{'/>'}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

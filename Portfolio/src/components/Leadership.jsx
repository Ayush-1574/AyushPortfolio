import { FiUsers, FiHeart, FiVideo, FiAward, FiCpu } from 'react-icons/fi'
import './Leadership.css'

const positions = [
  {
    role: 'Coordinator',
    org: 'Tennis Club',
    institute: 'IIT Ropar',
    period: 'Apr 2024 – Apr 2025',
    icon: <FiCpu />,
    color: 'cyan',
    desc: 'Led technical production coordination, managing events and content creation for the institute\'s technical club.',
  },

]

const certifications = [
  {
    title: 'Graph Theory Programming Camp',
    issuer: 'AlgoUniversity',
    year: '2026',
    icon: <FiCpu />,
    color: 'cyan',
  },
 
]

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Beyond code</span>
          <h2 className="section-title">Leadership <span>& Achievements</span></h2>
        </div>

        <div className="leadership-grid">
          <div className="leadership-col">
            <h3 className="col-title">
              <span className="col-dot dot-cyan" />
              Positions of Responsibility
            </h3>
            <div className="positions-list">
              {positions.map((pos, i) => (
                <div className={`position-card card pos-${pos.color}`} key={i}>
                  <div className={`pos-icon icon-${pos.color}`}>{pos.icon}</div>
                  <div className="pos-content">
                    <div className="pos-header">
                      <h4 className="pos-role">{pos.role}</h4>
                      <span className="pos-period">{pos.period}</span>
                    </div>
                    <p className="pos-org">{pos.org} · {pos.institute}</p>
                    <p className="pos-desc">{pos.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="leadership-col">
            <h3 className="col-title">
              <span className="col-dot dot-purple" />
              Certifications
            </h3>
            <div className="certs-list">
              {certifications.map((cert, i) => (
                <div className={`cert-card card cert-${cert.color}`} key={i}>
                  <div className="cert-top">
                    <div className={`cert-icon icon-${cert.color}`}>{cert.icon}</div>
                    <span className={`cert-year year-${cert.color}`}>{cert.year}</span>
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

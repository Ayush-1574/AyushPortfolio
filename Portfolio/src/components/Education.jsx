import { FiAward, FiBook } from 'react-icons/fi'
import './Education.css'

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    institute: 'Indian Institute of Technology, Ropar',
    period: '2023 – 2027',
    type: 'university',
    highlight: 'IIT Ropar',
    detail: 'Pursuing B.Tech from one of India\'s premier engineering institutions, with strong focus on CS fundamentals, system design, and practical software development.',
  },
  {
    degree: 'Senior Secondary (XII)',
    field: 'Science — Physics, Chemistry, Mathematics',
    institute: 'Prince Uch Madhyamik Vidhyalaya',
    period: '2022',
    type: 'school',
    score: '96.4%',
    detail: 'Completed senior secondary with distinction in science stream.',
  },
  {
    degree: 'Secondary (X)',
    field: '',
    institute: 'The Rajasthan School',
    period: '2020',
    type: 'school',
    score: '91.8%',
    detail: 'Outstanding academic performance with near-perfect score.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic background</span>
          <h2 className="section-title">Education <span>& Credentials</span></h2>
        </div>

        <div className="edu-timeline">
          {education.map((edu, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-connector">
                <div className={`edu-node ${edu.type === 'university' ? 'node-university' : 'node-school'}`}>
                  {edu.type === 'university' ? <FiAward /> : <FiBook />}
                </div>
                {i < education.length - 1 && <div className="edu-line" />}
              </div>

              <div className={`edu-card card ${edu.type === 'university' ? 'edu-featured' : ''}`}>
                <div className="edu-header">
                  <div>
                    <span className="edu-period">{edu.period}</span>
                    {edu.type === 'university' && (
                      <span className="iit-badge">🏛️ IIT</span>
                    )}
                  </div>
                  {edu.score && (
                    <div className="edu-score">
                      <span className="score-value">{edu.score}</span>
                    </div>
                  )}
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                {edu.field && (
                  <p className="edu-field">{edu.field}</p>
                )}
                <p className="edu-institute">{edu.institute}</p>
                <p className="edu-detail">{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

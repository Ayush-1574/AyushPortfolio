import { FiAward, FiZap, FiTrendingUp, FiArrowUp } from 'react-icons/fi'
import './Achievements.css'

// JEE cards are handled separately as dual-attempt cards
const jeeCards = [
  {
    id: 'jee-advanced',
    title: 'JEE Advanced',
    subtitle: 'Joint Entrance Examination — Advanced',
    icon: <FiTrendingUp />,
    color: 'gold',
    badge: '🏆 IIT Qualifier',
    attempts: [
      { year: '2022', rank: 'AIR 6,681', label: '1st Attempt' },
      { year: '2023', rank: 'AIR 1,574', label: '2nd Attempt', best: true },
    ],
    description:
      'Cleared JEE Advanced both years, improving by over 5,000 ranks — securing AIR 1,574 in the final attempt and earning a seat at IIT Ropar.',
  },
  {
    id: 'jee-mains',
    title: 'JEE Mains',
    subtitle: 'Joint Entrance Examination — Main',
    icon: <FiArrowUp />,
    color: 'cyan',
    badge: '⭐ Top Ranker',
    attempts: [
      { year: '2022', rank: 'AIR 8,061', label: '1st Attempt' },
      { year: '2023', rank: 'AIR 2,461', label: '2nd Attempt', best: true },
    ],
    description:
      'Demonstrated exceptional improvement across both JEE Mains attempts — jumping from AIR 8,061 to AIR 2,461 with consistent dedication.',
  },
]

const olympiadCards = [
  {
    id: 'sof',
    title: 'SOF Olympiads',
    subtitle: 'Science Olympiad Foundation',
    rank: 'International / State Rank',
    rankLabel: 'Rank',
    year: '2019 – 2022',
    icon: <FiAward />,
    color: 'purple',
    badge: '🥇 Olympiad Medalist',
    image: '/sof_medal.png',
    exams: ['NSO', 'IMO', 'IEO'],
    description:
      'Multiple ranks and medals in SOF Science, Math and English Olympiads across school years, competing at the international level.',
  },
  {
    id: 'iotho',
    title: 'IOTHO',
    subtitle: 'International Online Talent Hunt Olympiad',
    rank: 'Class Topper',
    rankLabel: 'Achievement',
    year: '2015 – 2022',
    icon: <FiZap />,
    color: 'green',
    badge: '🌐 International',
    image: '/iotho_medal.png',
    description:
      'Recognized for academic excellence through IOTHO — earned Class Topper medal competing at district, state and international level.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Honours &amp; Rankings</span>
          <h2 className="section-title">
            Achievements <span>&amp; Olympiads</span>
          </h2>
        </div>

        {/* ── JEE Cards (dual-attempt layout) ─────────────── */}
        <div className="ach-grid ach-grid-jee">
          {jeeCards.map((ach) => (
            <div key={ach.id} className={`ach-card card ach-${ach.color}`}>
              <div className="ach-top">
                <div className={`ach-icon-wrap ach-icon-${ach.color}`}>
                  {ach.icon}
                </div>
                <span className="ach-badge">{ach.badge}</span>
              </div>

              <div className="ach-body">
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-subtitle">{ach.subtitle}</p>

                {/* Two-attempt side-by-side */}
                <div className="ach-attempts">
                  {ach.attempts.map((att) => (
                    <div
                      key={att.year}
                      className={`ach-attempt-block ${att.best ? `ach-attempt-best ach-best-${ach.color}` : ''}`}
                    >
                      <span className="ach-attempt-label">
                        {att.label}
                        {att.best && <span className="ach-best-tag">Best</span>}
                      </span>
                      <span className="ach-attempt-year">{att.year}</span>
                      <span className={`ach-rank-value ach-rank-${ach.color}`}>
                        {att.rank}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="ach-desc">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Olympiad Cards ───────────────────────────────── */}
        <div className="ach-grid ach-grid-olympiad">
          {olympiadCards.map((ach) => (
            <div key={ach.id} className={`ach-card card ach-${ach.color}`}>
              <div className="ach-top">
                <div className={`ach-icon-wrap ach-icon-${ach.color}`}>
                  {ach.icon}
                </div>
                <span className="ach-badge">{ach.badge}</span>
              </div>

              {/* Medal Photo */}
              {ach.image && (
                <img
                  src={ach.image}
                  alt={`${ach.title} medal`}
                  className="ach-medal-img"
                />
              )}

              <div className="ach-body">
                <span className="ach-year">{ach.year}</span>
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-subtitle">{ach.subtitle}</p>

                <div className="ach-rank-block">
                  <span className="ach-rank-label">{ach.rankLabel}</span>
                  <span className={`ach-rank-value ach-rank-${ach.color}`}>
                    {ach.rank}
                  </span>
                </div>

                {ach.exams && (
                  <div className="ach-tags">
                    {ach.exams.map((ex) => (
                      <span key={ex} className="ach-tag">
                        {ex}
                      </span>
                    ))}
                  </div>
                )}

                <p className="ach-desc">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

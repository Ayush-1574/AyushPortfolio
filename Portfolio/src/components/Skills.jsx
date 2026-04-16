import {
  SiCplusplus, SiPython, SiJavascript,
  SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql,
  SiGit, SiLinux, SiTailwindcss,
  SiHtml5
} from 'react-icons/si'
import { FiCode, FiLayout } from 'react-icons/fi'
import './Skills.css'

const skillGroups = [
  {
    label: 'Languages',
    color: 'cyan',
    skills: [
      { name: 'C / C++', icon: <SiCplusplus /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
  },
  {
    label: 'Frontend',
    color: 'purple',
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <FiLayout /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    label: 'Backend & DB',
    color: 'cyan',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    label: 'Tools & Platforms',
    color: 'purple',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'REST APIs', icon: <FiCode /> },
    ],
  },
]

const courses = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Computer Networks',
  'DBMS',
  'OOPs',
  'Computer Architecture',
  'System Design (HLD & LLD)',
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I work with</span>
          <h2 className="section-title">Technical <span>Arsenal</span></h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className={`skill-group card color-${group.color}`} key={group.label}>
              <div className="group-header">
                <span className={`group-dot dot-${group.color}`} />
                <h3 className="group-label">{group.label}</h3>
              </div>
              <div className="skill-chips">
                {group.skills.map((skill) => (
                  <div className={`skill-chip chip-${group.color}`} key={skill.name}>
                    <span className="chip-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="courses-section">
          <div className="courses-header">
            <span className="section-label" style={{ textAlign: 'left' }}>Core curriculum</span>
            <h3 className="courses-title">Key Coursework</h3>
          </div>
          <div className="courses-chips">
            {courses.map((course) => (
              <span className="course-chip" key={course}>{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

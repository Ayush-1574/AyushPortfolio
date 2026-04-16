import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiCplusplus, SiJavascript
} from 'react-icons/si'
import './Projects.css'

const techIconMap = {
  'React.js': <SiReact />,
  'Node.js': <SiNodedotjs />,
  'Express.js': <SiExpress />,
  'MongoDB': <SiMongodb />,
  'C++': <SiCplusplus />,
  'JavaScript': <SiJavascript />,
  'DSA': <FiCode />,
  'Trie': <FiCode />,
}

const projects = [
  {
    featured: true,
    title: 'E-Commerce Web Application',
    period: 'July 2024 – Present',
    status: 'active',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    points: [
      'Designed and developed a full-stack e-commerce platform with scalable architecture',
    'Implemented secure user authentication and authorization using JWT',
    'Built Admin and Super Admin dashboards for product, user, and order management',
    'Integrated PayPal payment gateway for seamless online transactions',
    'Developed advanced product search, filtering, and category-based navigation',
    'Engineered complete cart and checkout workflow with responsive UI across devices',
    ],
    github: 'https://github.com/Ayush-1574/ecommerce',
    color: 'cyan',
  },
  
  {
  featured: true,
  title: 'Mess Automation System (Hostel Management)',
  period: 'March 2026 – Present',
  status: 'deploying',
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  points: [
    'Developed a full-stack mess automation system for hostel management at IIT Ropar',
    'Streamlining meal attendance, billing, and student management for 3000+ students',
    'Built role-based dashboards for admins to manage meals, users, and reports efficiently',
    'Automated manual processes, significantly reducing time and operational overhead',
    'Implemented real-time tracking of meal consumption and data-driven reporting',
    'Ensured application security by preventing NoSQL injection, implementing input validation, and using secure authentication practices',
    'Conducted thorough testing including API testing, edge case handling, and performance validation before deployment',
  ],
  github: 'https://github.com/Ayush-1574/Mess-Automation',
  color: 'green',
},
  
  {
    featured: false,
    title: 'RISC-V Assembler & Simulator',
    period: 'Feb 2025 – June 2025',
    status: 'completed',
    tech: ['C++', 'React.js'],
    points: [
      'Built a RISC-V assembler in C++ to convert assembly code into binary machine code',
      'Developed a simulator to execute instructions and manage memory and registers',
      'Created a React-based GUI for real-time code input and execution visualization',
      'Integrated backend simulation engine with frontend for seamless program simulation',
    ],
    github: 'https://github.com/Ayush-1574/RISCVSimulator',
    color: 'purple',
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've built</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`project-card card proj-${project.color} ${project.featured ? 'featured' : ''}`}
            >
              {project.featured && (
                <span className="featured-badge">⭐ Featured</span>
              )}

              <div className="project-top">
                <div className="project-meta">
                  <div className="project-status-row">
                    <span className={`status-dot status-${project.status}`} />
                    <span className="project-period">{project.period}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                    title="GitHub"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className={`tech-tag tag-${project.color}`} key={t}>
                    <span className="tech-icon">{techIconMap[t] || <FiCode />}</span>
                    {t}
                  </span>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((point, j) => (
                  <li key={j}>
                    <span className={`point-arrow arrow-${project.color}`}>→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

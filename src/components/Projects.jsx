import { useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import '../styles/components/projects.css';

import candles from '../IMG/candels.png';
import uispark from '../IMG/uispark.png';
import itclub from '../IMG/itclup.png';
import library from '../IMG/library.png';
import mercado from '../IMG/mercado.png';
import planner from '../IMG/study_planner.png';
import logitrack from '../IMG/logitrack.png';

const projects = [
  {
    title: "Dona's Candles",
    category: 'Web Development',
    description: 'A responsive candle store website with a clean and user-friendly shopping experience.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: candles,
    link: 'https://donascandels.netlify.app',
    linkText: 'Live Demo',
  },
  {
    title: 'UI Spark',
    category: 'UI/UX Design',
    description: 'A UI marketplace concept designed to help users discover and explore interface templates.',
    tools: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
    image: uispark,
    link: 'https://www.behance.net/gallery/229652965/UI-Spark',
    linkText: 'View Case Study',
  },
  {
    title: 'IT & AI CLUB',
    category: 'Logo Design',
    description: 'A modern visual identity combining technology, artificial intelligence, and innovation.',
    tools: ['Illustrator', 'Logo Design', 'Branding'],
    image: itclub,
    link: 'https://www.behance.net/gallery/236124689/IT-AI-CLUB-logo',
    linkText: 'View Design',
  },
  {
    title: 'Library Management System',
    category: 'Full Stack Development',
    description: 'A full-stack library system with author/book/user management, session-based auth, borrow-return tracking, and a REST API.',
    tools: ['HTML5', 'CSS3', 'PHP', 'MySQL'],
    image: library,
    link: 'http://nadinelibrary.gamer.free/library/admin/login.php',
    linkText: 'Live Demo',
  },
  {
    title: 'Mercado',
    category: 'UI/UX Design',
    description: 'A mobile supermarket application focused on simple navigation and an efficient shopping flow.',
    tools: ['Figma', 'Mobile UI', 'UX Design', 'Prototyping'],
    image: mercado,
    link: 'https://www.behance.net/gallery/251057269/Mercado',
    linkText: 'View Case Study',
  },
  {
    title: 'StudyPlanner',
    category: 'Full Stack Development',
    description: 'A student productivity platform with real user accounts, tracking coursework, exams, assignments, and study sessions across courses.',
    tools: ['React', 'Vite', 'Supabase', 'CSS3', 'AI-Assisted'],
    image: planner,
    link: 'https://studyplanner-taupe.vercel.app',
    linkText: 'Live Demo',
  },
  {
    title: 'LogiTrack',
    category: 'Web Development',
    description: 'A shipment management system for adding, searching, filtering, and tracking shipment records.',
    tools: ['TypeScript', 'SCSS', 'LocalStorage', 'Responsive Design'],
    image: logitrack,
    link: 'https://logi-track-drab.vercel.app',
    linkText: 'Live Demo',
  },
];

const Projects = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">My Work</span>

          <h2 className="section-title">Projects</h2>

          <p className="section-subtitle">
            A selection of projects that showcase my skills across design,
            development, and branding.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className="project-card reveal"
              key={project.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />

                <div className="project-image-overlay" />

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.linkText}: ${project.title}`}
                  >
                    <FiExternalLink />
                    {project.linkText}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
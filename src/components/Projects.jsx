import { useEffect, useRef, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import '../styles/components/projects.css';

import candles from '../IMG/candels.png';
import uispark from '../IMG/uispark.png';
import itclub from '../IMG/itclup.png';
import library from '../IMG/library.png';
import mercado from '../IMG/mercado.png';
import planner from '../IMG/study_planner.png';
import logitrack from '../IMG/logitrack.png';
import sprintboard from '../IMG/sprintboard.png';
import atelier from '../IMG/Atelier.jpg';

const projects = [
  {
    title: 'Atelier',
    category: 'UI/UX Design',
    group: 'design',
    description: 'A concept website for discovering and booking art workshops in Ramallah, Palestine, with a warm brand identity, custom logo, and a landing page inspired by handmade art.',
    tools: ['Figma', 'UI/UX Design', 'Branding', 'Logo Design', 'Landing Page'],
    image: atelier,
    link: 'https://www.behance.net/gallery/257155159/Atelier',
    linkText: 'View Case Study',
  },
  {
    title: 'UI Spark',
    category: 'UI/UX Design',
    group: 'design',
    description: 'A UI marketplace concept designed to help users discover and explore interface templates.',
    tools: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
    image: uispark,
    link: 'https://www.behance.net/gallery/229652965/UI-Spark',
    linkText: 'View Case Study',
  },
  {
    title: 'Mercado',
    category: 'UI/UX Design',
    group: 'design',
    description: 'A mobile supermarket application focused on simple navigation and an efficient shopping flow.',
    tools: ['Figma', 'Mobile UI', 'UX Design', 'Prototyping'],
    image: mercado,
    link: 'https://www.behance.net/gallery/251057269/Mercado',
    linkText: 'View Case Study',
  },
  {
    title: 'IT & AI CLUB',
    category: 'Logo Design',
    group: 'design',
    description: 'A modern visual identity combining technology, artificial intelligence, and innovation.',
    tools: ['Illustrator', 'Logo Design', 'Branding'],
    image: itclub,
    link: 'https://www.behance.net/gallery/236124689/IT-AI-CLUB-logo',
    linkText: 'View Design',
  },
  {
    title: 'SprintBoard',
    category: 'Web Development',
    group: 'development',
    description: 'A task management board for creating, organizing, and managing tasks with drag-and-drop functionality and reactive state updates.',
    tools: ['Angular', 'TypeScript', 'Reactive Forms', 'Signals', 'Drag & Drop'],
    image: sprintboard,
    link: 'https://sprintboard-three.vercel.app/board',
    linkText: 'Live Demo',
  },
  {
    title: 'LogiTrack',
    category: 'Web Development',
    group: 'development',
    description: 'A shipment management system for adding, searching, filtering, and tracking shipment records.',
    tools: ['Internship', 'TypeScript', 'SCSS', 'LocalStorage', 'Responsive Design'],
    image: logitrack,
    link: 'https://logi-track-drab.vercel.app',
    linkText: 'Live Demo',
  },
  {
    title: 'StudyPlanner',
    category: 'Full Stack Development',
    group: 'development',
    description: 'A student productivity platform with real user accounts, tracking coursework, exams, assignments, and study sessions across courses.',
    tools: ['React', 'Vite', 'Supabase', 'CSS3', 'AI-Assisted'],
    image: planner,
    link: 'https://studyplanner-taupe.vercel.app',
    linkText: 'Live Demo',
  },
  {
    title: "Dona's Candles",
    category: 'Web Development',
    group: 'development',
    description: 'A responsive candle store website with a clean and user-friendly shopping experience.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: candles,
    link: 'https://donascandels.netlify.app',
    linkText: 'Live Demo',
  },
  {
    title: 'Library Management System',
    category: 'Full Stack Development',
    group: 'development',
    description: 'A full-stack library system with author/book/user management, session-based auth, borrow-return tracking, and a REST API.',
    tools: ['HTML5', 'CSS3', 'PHP', 'MySQL'],
    image: library,
    link: 'http://nadinelibrary.gamer.free/library/admin/login.php',
    linkText: 'Live Demo',
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'design', label: 'UI/UX & Branding' },
  { id: 'development', label: 'Development' },
];

const Projects = () => {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const visibleProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.group === activeFilter);

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

        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`project-filter${activeFilter === filter.id ? ' active' : ''}`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" key={activeFilter}>
          {visibleProjects.map((project, i) => (
            <article
              className="project-card reveal visible"
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
              </div>

              <div className="project-info">
                <span className="project-category-inline">
                  {project.category}
                </span>

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

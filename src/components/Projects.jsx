import { useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import '../styles/components/projects.css';
import candles from '../IMG/candels.png';
import uispark from '../IMG/uispark.png';
import itclub from '../IMG/itclup.png';
import apartment from '../IMG/appartment.png';
import mercado from '../IMG/mercado.png';
import planner from '../IMG/planner.png';
import logitrack from '../IMG/logitrack.png';


const projects = [
  {
    title: "Dona's Candles",
    category: 'Web Development',
    image: candles,
    link: 'https://donascandels.netlify.app',
  },
  {
    title: 'UI Spark',
    category: 'UI/UX Design',
    image: uispark,
    link: 'https://www.behance.net/gallery/229652965/UI-Spark',
  },
  {
    title: 'IT & AI CLUB',
    category: 'Logo Design',
    image: itclub,
    link: 'https://www.behance.net/gallery/236124689/IT-AI-CLUB-logo',
  },
  {
    title: 'Apartment Management System',
    category: 'Full Stack Development',
    image: apartment,
    link: 'https://www.linkedin.com/posts/nadine-alazzeh_webdevelopment-sql-php-activity-7340438028781297664-56GO/',
  },

  {
    title: 'Mercado',
    category: 'UI/UX Design',
    image: mercado,
    link: 'https://www.behance.net/gallery/251057269/Mercado',
  },
  {
    title: 'StudyPlanner',
    category: 'Web Development',
    image: planner,
    link: 'https://studiesplanner.netlify.app',
  },
  {
    title:'LogiTrack',
    category: 'Web Development',
    image:logitrack,
    link:'https://logi-track-drab.vercel.app'
  }
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
            A selection of projects that showcase my skills across design, development, and branding.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className="project-card reveal"
              key={project.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);font-size:0.9rem;">Image not available</div>';
                  }}
                />
                <div className="project-image-overlay" />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink /> View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

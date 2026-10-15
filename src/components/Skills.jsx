import { useEffect, useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaJava,
  FaPython,
} from 'react-icons/fa';
import {
  SiSass,
  SiTypescript,
  SiBootstrap,
  SiAngular,
  SiVite,
  SiVercel,
  SiNetlify,
  SiMiro,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiPostman,
  SiCplusplus,
} from 'react-icons/si';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import {
  MdOutlinePersonSearch,
  MdOutlineChecklist,
  MdAccessibilityNew,
  MdDevices,
  MdTouchApp,
} from 'react-icons/md';
import { TbLayoutDashboard, TbRoute, TbComponents, TbStack2 } from 'react-icons/tb';
import '../styles/components/skills.css';
import photoshop from '../IMG/adobe-ps.svg';
import illustrator from '../IMG/adobe-ai.svg';
import indesign from '../IMG/adobe-id.svg';

// Skills grouped — UX & design come first
const skillGroups = [
  {
    title: 'UX & Design',
    items: [
      { name: 'User Research', icon: <MdOutlinePersonSearch /> },
      { name: 'Wireframing', icon: <TbLayoutDashboard /> },
      { name: 'Prototyping', icon: <MdTouchApp /> },
      { name: 'Usability Testing', icon: <MdOutlineChecklist /> },
      { name: 'User Flows', icon: <TbRoute /> },
      { name: 'Design Systems', icon: <TbComponents /> },
      { name: 'Accessibility', icon: <MdAccessibilityNew /> },
      { name: 'Responsive Design', icon: <MdDevices /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Adobe Illustrator', image: illustrator },
      { name: 'Adobe Photoshop', image: photoshop },
      { name: 'Adobe InDesign', image: indesign },
      { name: 'Miro', icon: <SiMiro /> },
      { name: 'Zeplin', icon: <TbStack2 /> },
    ],
  },
  {
    title: 'Front-End',
    items: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'SCSS', icon: <SiSass /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'Vite', icon: <SiVite /> },
    ],
  },
  {
    title: 'Tools & Deployment',
    items: [
      { name: 'Git & GitHub', icon: <FaGitAlt /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Netlify', icon: <SiNetlify /> },
      { name: 'Prompt Engineering', icon: <FaWandMagicSparkles /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    title: 'Back-End & Other',
    items: [
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
];

const Skills = () => {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            A curated set of skills and tools I use to design and build modern,
            user-centered experiences.
          </p>
        </div>

        {skillGroups.map((group) => (
          <div className="skills-block" key={group.title}>
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid">
              {group.items.map((skill, i) => (
                <div
                  className="skill-item reveal visible"
                  key={skill.name}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="skill-icon" aria-hidden="true">
                    {skill.image ? <img src={skill.image} alt="" /> : skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

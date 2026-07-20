import { useEffect, useRef, useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
} from 'react-icons/fa';
import { FaJava, FaPython } from 'react-icons/fa';
import {
  SiSass,
  SiTypescript,
  SiPhp,
  SiCplusplus,
  SiBootstrap,
  SiAngular,
  SiVite,
  SiVercel,
  SiNetlify,
  SiMysql,
} from "react-icons/si";
import '../styles/components/skills.css';
import photoshop from '../IMG/adobe-ps.svg';
import illustrator from '../IMG/adobe-ai.svg';
import indesign from '../IMG/adobe-id.svg';
import { FaWandMagicSparkles } from "react-icons/fa6";


const skills = [
  { name: "HTML5", icon: <FaHtml5 />, percent: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, percent: 90 },
  { name: "SCSS", icon: <SiSass />, percent: 85 },
  { name: "Bootstrap", icon: <SiBootstrap />, percent: 85 },
  { name: "JavaScript", icon: <FaJs />, percent: 90 },
  { name: "TypeScript", icon: <SiTypescript />, percent: 80 },
  { name: "React", icon: <FaReact />, percent: 85 },
  { name: "Angular", icon: <SiAngular />, percent: 55 },
  { name: "Vite", icon: <SiVite />, percent: 85 },
  { name: "Git & GitHub", icon: <FaGitAlt />, percent: 85 },
  { name: "Vercel", icon: <SiVercel />, percent: 80 },
  { name: "Netlify", icon: <SiNetlify />, percent: 80 },
  { name: "Figma", icon: <FaFigma />, percent: 90 },
  { name: "Adobe Illustrator", image: illustrator, percent: 90 },
  { name: "Adobe Photoshop", image: photoshop, percent: 75 },
  { name: "Adobe InDesign", image: indesign, percent: 90 },
  { name: "Prompt Engineering", icon: <FaWandMagicSparkles />, percent: 80 },
  { name: "MySQL", icon: <SiMysql />, percent: 75 },
  { name: "Java", icon: <FaJava />, percent: 90 },
  { name: "PHP", icon: <SiPhp />, percent: 65 },
  { name: "Python", icon: <FaPython />, percent: 70 },
  { name: "C++", icon: <SiCplusplus />, percent: 90 },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
          <h2 className="section-title">Technologies & Tools</h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I work with to build modern web experiences.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className="skill-item reveal"
              key={skill.name}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="skill-icon">
                {skill.image ? (
                  <img src={skill.image} alt={skill.name} />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-level">
                <div
                  className={`skill-level-bar${visible ? ' animated' : ''}`}
                  style={{ '--skill-percent': `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

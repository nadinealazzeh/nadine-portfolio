import { useEffect, useRef } from 'react';
import '../styles/components/about.css';
import profilePic from '../IMG/nadine_pic.jpg';

const stats = [
  { number: '6+', label: 'Years Learning' },
  { number: '8+', label: 'Projects' },
  { number: '25+', label: 'Technologies' },
];

const About = () => {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A designer and developer dedicated to crafting meaningful, user-centered digital experiences.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-visual reveal reveal-delay-1">
            <div className="about-image-wrapper">
              <img
                src={profilePic}
                className="about-image-placeholder"
                alt="Nadine Alazzeh"
              />
            </div>
          </div>
          <div className="about-text reveal reveal-delay-2">
            <h3>
              UI/UX Designer <span>& Front-End Developer</span>
            </h3>
            <p>
              I'm Nadine Alazzeh, a UI/UX Designer and Front-End Developer based in Palestine.
              I design clear, accessible, and visually compelling experiences for web and mobile,
              from user research and wireframes to polished interfaces in Figma, and I bring them
              to life using React, Angular, and TypeScript.
            </p>
            <p>
              With a strong foundation in both design and development, I bridge the gap between
              aesthetics and functionality. I enjoy understanding users' needs and turning complex
              problems into simple, intuitive solutions that make a real impact.
            </p>
            <p>
              When I'm not designing or coding, you'll find me exploring new design trends,
              studying great user experiences, or working on creative side projects that push
              my skills further.
            </p>
            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

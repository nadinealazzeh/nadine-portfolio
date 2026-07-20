import { useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/components/about.css';
import profilePic from '../IMG/nadine_pic.jpg';

const stats = [
  { number: '5+', label: 'Years Learning' },
  { number: '10+', label: 'Projects Built' },
  { number: '21+', label: 'Technologies' },
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
            A passionate developer dedicated to crafting meaningful digital experiences.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-visual reveal reveal-delay-1">
            <div className="about-image-wrapper">
              <img
                src={profilePic}
                className="about-image-placeholder"
                alt="profile pic"
              />
              
            </div>
          </div>
          <div className="about-text reveal reveal-delay-2">
            <h3>
              Front-End Developer <span>& UI/UX Designer</span>
            </h3>
            <p>
              I'm Nadine Alazzeh, a Front-End Developer and UI/UX Designer based in Palestine.
              I specialize in building responsive, accessible, and visually compelling web experiences
              using modern technologies like React, JavaScript, and CSS.
            </p>
            <p>
              With a strong foundation in both design and development, I bridge the gap between
              aesthetics and functionality. I enjoy turning complex problems into simple, beautiful,
              and intuitive solutions that make a real impact.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends, contributing to
              open-source projects, or working on creative side projects that push my skills further.
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

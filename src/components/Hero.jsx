import { FaLinkedinIn, FaGithub, FaBehance, FaFileAlt, FaChevronDown } from 'react-icons/fa';
import '../styles/components/hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">

        <h1>
          Hi, I'm <span className="highlight">Nadine Alazzeh</span>
        </h1>
        <h2>UI/UX Designer & Front-End Developer</h2>
        <p>
          I design and build user-centered, accessible, and visually engaging
          digital experiences, from research to clean code.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn--primary btn--lg">
            View My Projects
          </a>
          <a href="#contact" className="btn btn--outline btn--lg">
            Get In Touch
          </a>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com/in/nadinealazzeh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.behance.net/nadinealazzeh" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <FaBehance />
          </a>
          <a href="https://github.com/nadinealazzeh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://drive.google.com/file/d/1WGOd1FKtSCQHmUVMn7K7qK3r1LTCvCkF/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FaFileAlt />
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" aria-label="Scroll to about section">
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;

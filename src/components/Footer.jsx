import { FaLinkedinIn, FaGithub, FaFileAlt } from 'react-icons/fa';
import '../styles/components/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copyright">
          Copyrights &copy; {year} <span>Nadine Alazzeh</span>
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/nadinealazzeh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/nadinealazzeh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://drive.google.com/file/d/1GCzNGng5LR2V1bAmUaJn3CbF1bB-cknP/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FaFileAlt />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../useTheme';
import '../styles/components/navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const getActiveSection = () => {
  const sections = NAV_LINKS.map(l => l.href.slice(1));
  const scrollPos = window.scrollY + 120;
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i]);
    if (el && el.offsetTop <= scrollPos) return sections[i];
  }
  return '';
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(window.scrollY > 50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(getActiveSection());

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setActiveSection(getActiveSection());
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          NAD<span>INE</span>
        </a>

        <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

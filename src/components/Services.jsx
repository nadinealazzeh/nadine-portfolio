import { useEffect, useRef } from 'react';
import { FiPenTool, FiCode, FiMonitor, FiLayers } from 'react-icons/fi';
import '../styles/components/services.css';

const services = [
  {
    icon: <FiPenTool />,
    title: 'UI/UX Design',
    description: 'Crafting user-friendly and visually appealing interfaces, from wireframes to interactive prototypes, ensuring a seamless user experience.',
  },
  {
    icon: <FiCode />,
    title: 'Web Development',
    description: 'Building responsive and functional websites using HTML, CSS, and JavaScript, turning ideas and designs into real digital products.',
  },
  {
    icon: <FiMonitor />,
    title: 'Front-End Development',
    description: 'Writing clean, maintainable code with smooth animations and transitions, focusing on performance and responsiveness across all devices.',
  },
  {
    icon: <FiLayers />,
    title: 'Visual Design',
    description: 'Designing consistent branding elements, icons, and graphics to enhance the overall look and feel of your digital presence.',
  },
];

const Services = () => {
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
    <section className="services" id="services">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            From concept to launch, I provide end-to-end services that bring your digital vision to life.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card reveal" key={service.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

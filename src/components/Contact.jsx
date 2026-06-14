import { useEffect, useRef } from 'react';
import { FiPhone, FiMail, FiSend } from 'react-icons/fi';
import '../styles/components/contact.css';

const Contact = () => {
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
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-cards reveal reveal-delay-1">
            <a
              href="tel:+970592213987"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FiPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>+970 592 213 987</p>
              </div>
            </a>
            <a
              href="mailto:nadinewailalazzeh@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FiMail />
              </div>
              <div>
                <h3>Email</h3>
                <p>nadinewailalazzeh@gmail.com</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

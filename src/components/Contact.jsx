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
            <div className="contact-card">
              <div className="contact-card-icon">
                <FiPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>+970 592 213 987</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <FiMail />
              </div>
              <div>
                <h3>Email</h3>
                <p>nadinewailalazzeh@gmail.com</p>
              </div>
            </div>
          </div>
          <form
            className="contact-form reveal reveal-delay-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="contact-form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" required />
            <button type="submit" className="btn btn--primary btn--lg" style={{ alignSelf: 'flex-start' }}>
              <FiSend style={{ marginRight: 8 }} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", msg: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <div className="sec-tag">
          <span className="sec-tag-dot"></span> LET'S TALK
        </div>
        <h2 className="sec-title">Contact</h2>

        <div className="contact-grid-layout">
          <div className="contact-info-col">
            <h3 className="contact-subtitle">Have a project or opportunity?</h3>
            <p className="contact-desc">
              I'm open to freelance projects, collaborations and full-time
              opportunities. If you have something worth building — let's
              talk.
            </p>

            <div className="contact-methods-list">
              <a href="mailto:mansurnass51@gmail.com" className="contact-pill-item">
                <span className="contact-pill-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="contact-pill-text">mansurnass51@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com"
                className="contact-pill-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-pill-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27z" />
                  </svg>
                </span>
                <span className="contact-pill-text">linkedin.com/in/mansur</span>
              </a>

              <a
                href="https://github.com/Mansur-WP/"
                className="contact-pill-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-pill-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </span>
                <span className="contact-pill-text">github.com/Mansur-WP</span>
              </a>

              <a
                href="https://wa.me/2349042834479"
                className="contact-pill-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-pill-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.03-.53.28-.18.25-.7 1.05-.7 2.57 0 1.51 1.1 2.97 1.25 3.17.15.2 2.12 3.39 5.25 4.61 2.6 1.01 3.13.81 3.7.76.56-.06 1.8-.74 2.05-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.59-.36-.31-.15-1.8-.89-2.08-.99-.28-.1-.49-.15-.7.15-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.31-.48-2.49-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.7-.96-2.33-.25-.61-.51-.53-.7-.54z" />
                  </svg>
                </span>
                <span className="contact-pill-text">WhatsApp (Nigeria)</span>
              </a>
            </div>
          </div>

          <div className="contact-form-col">
            <form
              className="modern-contact-form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="form-row-dual">
                <div className="form-field">
                  <label htmlFor="contact-name" className="visually-hidden">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email" className="visually-hidden">Your email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-msg" className="visually-hidden">Message</label>
                <textarea
                  id="contact-msg"
                  name="msg"
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.msg}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message →"}
              </button>

              {success && (
                <div className="form-success-alert" role="status">
                  ✓ Message sent! JazakAllahu khairan. I'll get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

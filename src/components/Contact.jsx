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
      setTimeout(() => setSuccess(false), 4000);
    }, 1200);
  };

  return (
    <div className="section" id="contact">
      <div className="section-inner">
        <div className="sec-tag">Let's talk</div>
        <h2 className="sec-title">Contact</h2>
        <div className="contact-wrap">
          <div className="contact-left">
            <h3>Have a project or opportunity?</h3>
            <p>
              I'm open to freelance projects, collaborations and full-time
              opportunities. If you have something worth building — let's
              talk.
            </p>
            <div className="contact-items">
              <a href="mailto:mansur@email.com" className="contact-item">
                <div className="ci-icon">✉</div>
                mansur@email.com
              </a>
              <a
                href="https://linkedin.com"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ci-icon">in</div>
                linkedin.com/in/mansur
              </a>
              <a
                href="https://github.com/Mansur-WP/"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ci-icon">GH</div>
                github.com/Mansur-WP
              </a>
              <a
                href="https://wa.me/2349042834479"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ci-icon">WA</div>
                WhatsApp (Nigeria)
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="msg"
              placeholder="Tell me about your project or opportunity..."
              value={form.msg}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Send message →"}
            </button>
            {success && (
              <div id="form-ok">✓ Message sent! JazakAllahu khairan.</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import { FormEvent, useState } from "react";

const contactEmail = "naisogad@gmail.com";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !projectType || !message) {
      setFormStatus("Please complete each field before sending.");
      return;
    }

    const subject = `Portfolio inquiry — ${projectType}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus("Opening your email app with the message prepared.");
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="editorial-container contact-layout">
        <aside className="contact-panel">
          <p className="eyebrow eyebrow-light">Direct contact</p>
          <h2 className="contact-panel-heading">Reach out.</h2>
          <p className="contact-panel-intro">
            For employers, freelance clients, or a good project conversation, I&apos;d be glad to hear from you.
          </p>

          <div className="contact-details">
            <a className="contact-detail-card contact-detail-card-active" href={`mailto:${contactEmail}`}>
              <span className="contact-detail-icon" aria-hidden="true">✉</span>
              <span>
                <small>Email</small>
                <strong>{contactEmail}</strong>
              </span>
            </a>
            <a className="contact-detail-card" href="#work">
              <span className="contact-detail-icon" aria-hidden="true">↗</span>
              <span>
                <small>Selected work</small>
                <strong>View the projects</strong>
              </span>
            </a>
            <div className="contact-detail-card">
              <span className="contact-detail-icon" aria-hidden="true">＋</span>
              <span>
                <small>Focus</small>
                <strong>Web development &amp; custom websites</strong>
              </span>
            </div>
          </div>
        </aside>

        <div className="contact-form-panel">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-heading" className="contact-form-heading">Let&apos;s build something.</h2>
          <form className="contact-form" aria-describedby="contact-form-note" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
              </label>
            </div>
            <label>
              Project type
              <select name="projectType" defaultValue="" required>
                <option value="" disabled>Select...</option>
                <option value="employment">Employment opportunity</option>
                <option value="website">Custom website</option>
                <option value="application">Web application</option>
                <option value="other">Something else</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell me about your project..." rows={5} required />
            </label>
            <button type="submit">Send message <span aria-hidden="true">↗</span></button>
            <p id="contact-form-note" className="contact-form-note">
              Submitting opens your email app with the message prepared for {contactEmail}.
            </p>
            {formStatus ? <p className="contact-form-status" role="status">{formStatus}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

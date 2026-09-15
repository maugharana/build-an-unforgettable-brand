import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xppwazgz";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Get started</p>
          <h2>
            Let's make your brand
            <br />
            impossible to forget.
          </h2>
          <p className="contact-lead">
            Tell me a bit about what you're building and where you're stuck.
            I read every message myself and reply within two business days
            with next steps — including whether coaching is the right fit.
          </p>

          <div className="contact-meta">
            <div>
              <span className="contact-meta-label">Email</span>
              <span>hello@buildanunforgettablebrand.com</span>
            </div>
            <div>
              <span className="contact-meta-label">Based in</span>
              <span>Working with founders worldwide, remote</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            What are you building?
            <textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="A sentence or two about your business and where you're stuck."
            />
          </label>
          <button
            className="btn btn-primary contact-submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "Message sent — talk soon"
              : "Book a free strategy call"}
          </button>
          {status === "sent" && (
            <p className="contact-confirm">Thanks — I'll reply within two business days.</p>
          )}
          {status === "error" && (
            <p className="contact-error">
              Something went wrong sending that. Try again, or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

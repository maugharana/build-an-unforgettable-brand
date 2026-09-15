import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PACKAGES = [
  {
    name: "Brand Clarity Sprint",
    tagline: "For the person who hasn't started yet",
    price: "2-week sprint",
    features: [
      "3 x 1:1 deep-work sessions",
      "Positioning & story framework",
      "Name, voice & visual direction brief",
      "90-day content roadmap",
    ],
  },
  {
    name: "Build an Unforgettable Brand",
    tagline: "The core coaching program",
    price: "12 weeks",
    highlighted: true,
    features: [
      "Weekly 1:1 coaching calls",
      "Full brand & offer positioning",
      "Content system built around your schedule",
      "Async support between sessions",
      "Launch plan + accountability check-ins",
    ],
  },
  {
    name: "Founder Advisory",
    tagline: "Ongoing partnership past the launch",
    price: "Monthly retainer",
    features: [
      "Bi-weekly strategy sessions",
      "Brand & offer evolution as you grow",
      "Priority access between calls",
      "Quarterly brand audit",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(1);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Coaching programs</p>
          <h2>Pick the level of support that matches your stage.</h2>
          <p className="section-sub">
            Every program is built for people who are working a full-time job —
            sessions, pacing, and homework are designed around the hours you
            actually have, not the hours a full-time founder would have.
          </p>
        </div>

        <div className="services-list">
          {PACKAGES.map((pkg, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                className={`services-row ${open ? "services-row-open" : ""} ${pkg.highlighted ? "services-row-highlight" : ""}`}
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  className="services-row-head"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <div className="services-row-title">
                    <span className="services-row-tagline">{pkg.tagline}</span>
                    <h3>{pkg.name}</h3>
                  </div>
                  <div className="services-row-meta">
                    <span className="services-row-price">{pkg.price}</span>
                    <span className="services-row-arrow">{open ? "−" : "→"}</span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="services-row-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="service-features">
                        {pkg.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <button
                        className={`btn ${pkg.highlighted ? "btn-primary" : "btn-ghost"} service-cta`}
                        onClick={scrollToContact}
                      >
                        Apply for this program
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

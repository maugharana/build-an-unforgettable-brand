import { motion } from "framer-motion";

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

        <div className="services-grid">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`service-card ${pkg.highlighted ? "service-card-highlight" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {pkg.highlighted && <span className="service-badge">Most popular</span>}
              <p className="service-tagline">{pkg.tagline}</p>
              <h3>{pkg.name}</h3>
              <p className="service-price">{pkg.price}</p>
              <ul className="service-features">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className={`btn ${pkg.highlighted ? "btn-primary" : "btn-ghost"} service-cta`}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply for this program
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

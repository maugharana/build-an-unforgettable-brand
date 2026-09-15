import { motion } from "framer-motion";

// Two spots below are still placeholders — swap in the rest of your quotes when ready.
const QUOTES = [
  {
    quote:
      "Ahmad really has mastered the art of writing. His storytelling systems are an instant hit with my audience.",
    name: "Add your client's name",
    role: "Founder, replace with their business",
  },
  {
    quote:
      "Ahmad didn't hand me a content calendar. He helped me figure out what my brand was actually for — everything got easier after that.",
    name: "Add your client's name",
    role: "Founder, replace with their business",
  },
  {
    quote:
      "Working full-time and building a brand felt impossible until we broke it into something I could do in an hour a night.",
    name: "Add your client's name",
    role: "Founder, replace with their business",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Results</p>
          <h2>What it sounds like from the inside.</h2>
        </div>

        <div className="testimonial-grid">
          {QUOTES.map((t, i) => (
            <motion.figure
              key={t.name + i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <blockquote>"{t.quote}"</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

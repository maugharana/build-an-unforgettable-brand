import { motion } from "framer-motion";

// Roles/businesses are placeholders — swap in each client's title once you have it.
const QUOTES = [
  {
    quote:
      "Ahmad really has mastered the art of writing. His storytelling systems are an instant hit with my audience.",
    name: "Nasir",
    role: "Client, Build an Unforgettable Brand",
  },
  {
    quote:
      "Ahmad knows what he's doing. His storyselling structure has given a new direction to my business.",
    name: "Kashif",
    role: "Client, Build an Unforgettable Brand",
  },
  {
    quote:
      "I want to thank Ahmad for helping with my storytelling content. I used to be afraid in front of the camera because I thought I didn't know what to speak.",
    name: "Rohit",
    role: "Client, Build an Unforgettable Brand",
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

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Coaching for founders on the side
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Build an <em>Unforgettable</em> Brand
          <br />
          while you still have a job.
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
        >
          I'm Ahmad Jamal. I coach full-time professionals and first-time founders
          building a real business on nights and weekends — turning a scattered
          side project into a brand people remember, trust, and buy from.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
        >
          <button className="btn btn-primary" onClick={() => scrollTo("contact")}>
            Book a free strategy call
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo("services")}>
            See how coaching works
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div>
            <strong>1:1</strong>
            <span>Founder-focused coaching</span>
          </div>
          <div>
            <strong>Nights &amp; weekends</strong>
            <span>Built for the full-time job schedule</span>
          </div>
          <div>
            <strong>Brand-first</strong>
            <span>Positioning before tactics</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  );
}

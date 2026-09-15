import { motion } from "framer-motion";

const POINTS = [
  "Went from an unclear side hustle to a recognizable brand — without quitting the day job first.",
  "Worked with founders across e-commerce, consulting, and content businesses.",
  "Believes brand isn't a logo — it's the sharpest, most repeatable version of why you exist.",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Why me</p>
          <h2>
            You don't need more hustle.
            <br />
            You need a brand worth remembering.
          </h2>
          <p className="about-lead">
            Most people building a business alongside a full-time job get stuck
            in the same place: they're working hard, but nothing they post,
            build, or launch feels distinct. I help you fix that — by finding
            the brand story and positioning that makes people stop scrolling
            and start paying attention, before you spend another hour on
            content that blends in.
          </p>

          <ul className="about-points">
            {POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="about-point-mark">0{i + 1}</span>
                <p>{point}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="about-card-label">Who this is for</p>
          <ul className="about-card-list">
            <li>Full-time professionals building a business on the side</li>
            <li>First-time founders who feel invisible online</li>
            <li>Anyone launching a brand and unsure what makes it stick</li>
          </ul>
          <div className="about-card-quote">
            "Coaching isn't about working more hours. It's about making the
            hours you already have count."
            <span>— Ahmad Jamal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

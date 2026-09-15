import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "We map your story, skills, and audience to find the honest, specific angle that no one else can claim.",
  },
  {
    step: "02",
    title: "Define",
    desc: "We turn that angle into a clear brand position, offer, and voice you can repeat in one sentence.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We build the visual and content system around your real schedule — nights, weekends, lunch breaks.",
  },
  {
    step: "04",
    title: "Launch & iterate",
    desc: "You publish, we review what's working weekly, and sharpen the brand as real feedback comes in.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>A process built for people with a full calendar.</h2>
        </div>

        <div className="process-list">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              className="process-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="process-num">{s.step}</span>
              <div className="process-copy">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  {
    q: "I already have a full-time job. How much time does this actually take?",
    a: "Most weeks it's 2 to 4 hours: one coaching call and a few focused blocks of homework. Everything is scoped for someone working nights and weekends, not a full-time founder.",
  },
  {
    q: "I haven't launched anything yet. Am I too early for this?",
    a: "No — the Brand Clarity Sprint exists exactly for that stage. Getting your positioning right before you launch saves you months of posting content that doesn't land.",
  },
  {
    q: "What if I already have a business but my brand feels generic?",
    a: "That's the most common starting point. We rebuild your positioning and voice from what's actually true about you and your work, then rebuild the content system around it.",
  },
  {
    q: "Do you work with any industry, or just content-based businesses?",
    a: "I work with founders across e-commerce, consulting, coaching, and content businesses. The common thread is you're building something real alongside a job, not the industry.",
  },
  {
    q: "How does payment and scheduling work?",
    a: "You'll get exact pricing and scheduling on our strategy call, once I understand your stage and goals. There's no obligation to continue after that call.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <motion.div
          className="faq-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Common questions</p>
          <h2>The things worth settling before you commit.</h2>
          <p className="section-sub">
            If yours isn't here, ask it on the strategy call — I'd rather answer it before you sign up than after.
          </p>
        </motion.div>

        <div className="faq-list">
          {QUESTIONS.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                className={`faq-row ${open ? "faq-row-open" : ""}`}
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{open ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.a}</p>
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

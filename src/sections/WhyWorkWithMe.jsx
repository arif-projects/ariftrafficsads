import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import "../styles/WhyWorkWithMe.css";

const reasons = [
  "I deliver accurate and dependable ad trafficking support.",
  "I follow instructions and SOPs with precision.",
  "I communicate clearly and professionally.",
  "I handle execution-heavy workloads reliably.",
  "I am focused on long-term growth and skill development.",
];

export default function WhyWorkWithMe() {
  return (
    <section className="why-section" id="why-work-with-me">
      <Container>
        <h2 className="why-title">
          WHY <span>WORK</span> WITH ME?
        </h2>

        <motion.div
          className="why-card-single"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ul className="why-list">
            {reasons.map((item, index) => (
              <li key={index}>
                <span className="why-dot" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}

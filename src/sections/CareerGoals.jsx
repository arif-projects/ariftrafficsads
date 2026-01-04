import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/CareerGoals.css";

export default function CareerGoals() {
  const goals = [
    "Grow into a campaign-level AdOps role",
    "Gain deeper exposure to campaign setup and delivery workflows",
    "Work with global remote AdOps teams",
    "Expand technical knowledge of ad servers and tracking systems",
  ];

  return (
    <section className="career-goals-section" id="career-goals">
      <Container>
        {/* Section Title */}
        <motion.h2
          className="career-goals-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          MY FUTURE GOALS
        </motion.h2>

        {/* Goals Grid */}
        <Row className="goals-grid">
          {goals.map((goal, index) => (
            <Col md={6} key={index} className="mb-4">
              <motion.div
                className="goal-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="goal-dot" />
                <p>{goal}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div className="career-goals-cta">
          <button className="static-glow-btn">
            Open to Global Opportunities
          </button>
        </div>
      </Container>
    </section>
  );
}

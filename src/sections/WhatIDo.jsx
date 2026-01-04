import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaAd,
  FaBug,
  FaChartLine,
  FaFlask,
  FaLayerGroup,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/WhatIDo.css";

/* Animation variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhatIDo() {
  return (
    <section className="whatido-section" id="what-i-do">
      <Container>
        {/* Section Title Animation */}
        <motion.h2
          className="whatido-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WHAT I DO
        </motion.h2>

        {/* Cards Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="whatido-grid">
            <Col md={6} lg={4}>
              <motion.div variants={cardVariants} className="whatido-card">
                <FaAd className="whatido-icon" />
                <h3>Ad Trafficking (Execution-Focused)</h3>
                <p>
                  Traffic display and video creatives based on provided
                  implementation instructions, executing all setups in strict
                  alignment with US AdOps SOPs and guidelines.
                </p>
              </motion.div>
            </Col>

            <Col md={6} lg={4}>
              <motion.div variants={cardVariants} className="whatido-card">
                <FaBug className="whatido-icon" />
                <h3>Tag QA & Validation</h3>
                <p>
                  Perform QA on VAST, JavaScript (JS), Innovid, and other
                  third-party tags, validate tracking pixels, and flag issues
                  for review and escalation.
                </p>
              </motion.div>
            </Col>

            <Col md={6} lg={4}>
              <motion.div variants={cardVariants} className="whatido-card">
                <FaChartLine className="whatido-icon" />
                <h3>Reporting & Documentation</h3>
                <p>
                  Support reporting tasks according to documented SOPs and
                  maintain accurate implementation records, task logs, and
                  status updates.
                </p>
              </motion.div>
            </Col>

            <Col md={6} lg={4}>
              <motion.div variants={cardVariants} className="whatido-card">
                <FaLayerGroup className="whatido-icon" />
                <h3>SPN Drop Trafficking</h3>
                <p>
                  Execute SPN drop trafficking across multiple publisher
                  websites, applying correct IDs, assets, and targeting
                  parameters as instructed by the US team.
                </p>
              </motion.div>
            </Col>

            <Col md={6} lg={4}>
              <motion.div variants={cardVariants} className="whatido-card">
                <FaFlask className="whatido-icon" />
                <h3>Test Pages & Creative Verification</h3>
                <p>
                  Create and validate test pages for pre-launch verification and
                  ensure creatives render correctly before going live.
                </p>
              </motion.div>
            </Col>

            <Col md={6} lg={4}>
              <motion.div variants={cardVariants} className="whatido-card">
                <FaShieldAlt className="whatido-icon" />
                <h3>Brand Safety & Targeting Application</h3>
                <p>
                  Apply brand-safety controls and targeting settings as
                  instructed, following predefined rules within Google Ad
                  Manager (GAM) and AdBook.
                </p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

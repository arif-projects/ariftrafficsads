import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <Container>
        {/* Section Title */}
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WORK EXPERIENCE
        </motion.h2>

        <Row className="justify-content-center">
          {/* Experience Card */}
          <Col md={8}>
            <motion.div
              className="experience-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="experience-header">
                <FaBriefcase className="experience-icon" />
                <h3>Digital Advertising Executive — SEBPO</h3>
              </div>
              <p className="experience-date">March 06, 2023 – Present</p>
              <ul className="experience-list">
                <li>
                  Execute display and video ad trafficking for publisher
                  environments based on US AdOps–provided instructions
                </li>
                <li>
                  Implement creative assets, ad tags, tracking pixels, and IDs
                  with a strong focus on accuracy and compliance
                </li>
                <li>
                  Perform QA on creatives and third-party tags prior to launch
                  to prevent delivery or tracking issues
                </li>
                <li>
                  Identify, document, and report tagging or delivery issues for
                  review and resolution
                </li>
                <li>
                  Support reporting and implementation documentation in line
                  with defined SOPs
                </li>
                <li>
                  Coordinate with internal and US-based teams using Jira and
                  Slack to manage tasks and updates
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

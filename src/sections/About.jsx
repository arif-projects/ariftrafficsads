import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../assets/Image 1.png";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* LEFT — IMAGE */}
          <Col md={5} className="mb-4 mb-md-0">
            <motion.div
              className="about-image-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={aboutImg} alt="About profile" />
            </motion.div>
          </Col>

          {/* RIGHT — CONTENT */}
          <Col md={7}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="about-title">ABOUT ME</h2>

              <p>
                I am a Digital Advertising Executive (Ad Operations / Ad
                Trafficking) with hands-on experience supporting US-based
                publisher ad operations in high-volume, production environments.
                I currently work with the SEBPO Bangladesh team, providing
                execution support to the US SEBPO AdOps team that manages ad
                publishing for established media publishers.
              </p>

              <p>
                My role is execution-focused and process-driven. I am
                responsible for trafficking display and video ads, validating
                third-party tags, conducting pre- and post-launch QA, and
                ensuring every setup strictly follows US team SOPs, naming
                conventions, and implementation guidelines. I do not own client
                communication or campaign strategy; my value lies in accurate
                execution, risk reduction, and operational consistency.
              </p>

              <p>
                I bring strong working knowledge of Google Ad Manager (GAM),
                AdBook, creative asset management, tracking and pixel
                validation, and troubleshooting delivery or tagging issues
                before they impact live campaigns. I am detail-oriented,
                deadline-aware, and comfortable operating within structured
                workflows and escalation processes.
              </p>

              <p>
                My long-term goal is to grow into a campaign-level Ad Operations
                role by gaining deeper exposure to end-to-end campaign
                workflows, while continuing to deliver high-quality trafficking,
                QA, and implementation support for US publisher teams.
              </p>

              <div className="about-buttons">
                <a
                  href="https://drive.google.com/file/d/1t-rZVrFCIezbXIjWRQk05tWtpCHOvpsR/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="star-btn"
                >
                  Download Resume
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="neon-btn"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

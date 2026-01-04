import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { FaChartBar, FaLaptopCode, FaTools, FaUserTie } from "react-icons/fa";
import "../styles/Skills.css";

export default function Skills() {
  const skillsData = [
    {
      title: "Ad Trafficking & Execution",
      icon: <FaChartBar />,
      items: [
        "Display ad trafficking",
        "Video ad trafficking",
        "First-party & third-party creative handling",
        "Tag QA and validation",
        "SOP-based implementation",
        "Issue identification and escalation",
      ],
    },
    {
      title: "Technical Skills",
      icon: <FaLaptopCode />,
      items: [
        "Google Ad Manager (GAM)",
        "AdBook",
        "Third-party ad tags & trackers",
        "Creative specs & asset validation",
        "Google Sheets & Microsoft Excel (reporting support)",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUserTie />,
      items: [
        "Clear communication",
        "Strong attention to detail",
        "Process-driven execution",
        "Time management",
        "Ability to work under tight deadlines",
      ],
    },
    {
      title: "Platforms & Tools",
      icon: <FaTools />,
      items: [
        "Google Ad Manager (GAM)",
        "AdBook",
        "LiveIntent",
        "Magnite",
        "Jira / Slack / Zoom / Email",
        "Google Docs / Sheets / Slides",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          SKILLS
        </motion.h2>

        {/* gx controls horizontal | gy controls vertical spacing */}
        <Row className="skills-grid gx-2 gy-4">
          {skillsData.map((section, idx) => (
            <Col key={idx} md={6}>
              <motion.div
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-card-header">
                  <span className="skill-icon">{section.icon}</span>
                  <h3>{section.title}</h3>
                </div>

                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

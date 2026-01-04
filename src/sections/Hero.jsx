import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroImg from "../assets/image 2.png";
import "../styles/Hero.css";

const rotatingTexts = [
  "Ad Trafficking & Execution Specialist",
  "Data-Driven Problem Solver",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-wrapper" id="banner">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE TEXT */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-name">
                <span className="hero-hi">Hi, I’m</span>{" "}
                <span className="hero-fullname">Md. Ariful Haque Hridoy</span>
              </h1>

              <div className="hero-subtitle">
                <span className="hero-static-role">
                  Digital Advertising Executive
                </span>
                <span className="hero-divider"> | </span>
                <span key={textIndex} className="hero-rotating-role">
                  {rotatingTexts[textIndex]}
                </span>
              </div>

              <p className="hero-description">
                I work on digital ad trafficking and implementation for large
                publisher websites, supporting display and video campaigns
                through accurate execution, tag QA, and SOP-driven workflows.
              </p>

              <div className="hero-buttons">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="star-button"
                >
                  Hire Me
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("what-i-do")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="neon-button"
                >
                  View My Work
                </button>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img src={heroImg} alt="Hero" className="hero-image" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgrjkzj");
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleCloseModal = () => {
    setShowModal(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Container>
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          CONTACT ME
        </motion.h2>

        <Row className="align-items-center">
          {/* LEFT — CONTACT INFO */}
          <Col md={5}>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Md. Ariful Haque Hridoy</h3>
              <p className="designation">
                Digital Advertising Executive & AdOps Specialist
              </p>

              <div className="info-item">
                <FaEnvelope />
                <span>arifulhaque60332@gmail.com</span>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="info-item">
                <FaUserTie />
                <span>Open to Remote / Global Opportunities</span>
              </div>

              <a
                href="https://www.linkedin.com/in/ariful-hridoy/"
                target="_blank"
                rel="noreferrer"
                className="linkedin-link"
              >
                <FaLinkedin /> LinkedIn Profile
              </a>
            </motion.div>
          </Col>

          {/* RIGHT — CONTACT FORM */}
          <Col md={7}>
            <motion.form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                type="text"
                name="designation"
                placeholder="Designation"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button type="submit" disabled={state.submitting}>
                Send Message
              </button>
            </motion.form>
          </Col>
        </Row>
      </Container>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="contact-modal-overlay">
          <div className="contact-modal">
            <h3>Submitted!</h3>
            <p>Thank you for reaching out. I’ll get back to you shortly.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

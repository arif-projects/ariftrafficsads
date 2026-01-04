import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Navbar.css";

const CustomNavbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // hide
      } else {
        setShowNav(true); // show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`glass-navbar ${showNav ? "nav-visible" : "nav-hidden"}`}
    >
      <Container>
        {/* LOGO / BRAND */}
        <Navbar.Brand className="nav-brand">ArifTrafficsAds</Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          className="nav-toggle"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* NAV ITEMS */}
            {[
              { id: "banner", label: "Home" },
              { id: "about", label: "About" },
              { id: "career-goals", label: "Goals" },
              { id: "skills", label: "Skills" },
              { id: "experience", label: "Experience" },
              { id: "why-work-with-me", label: "Why Me" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link neon-link"
                onClick={() => setExpanded(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

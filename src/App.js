// src/App.jsx
import Layout from "./components/Layout";
import About from "./sections/About";
import CareerGoals from "./sections/CareerGoals";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import WhatIDo from "./sections/WhatIDo";
import WhyWorkWithMe from "./sections/WhyWorkWithMe";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <WhatIDo />
      <CareerGoals />
      <Skills />
      <Experience />
      <WhyWorkWithMe />
      <Contact />
    </Layout>
  );
}

export default App;

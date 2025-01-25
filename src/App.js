import React, { useEffect } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Patent from './components/Patent';
import Blogs from './components/Blogs';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Patent />
      <Blogs />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

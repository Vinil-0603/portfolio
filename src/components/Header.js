// src/components/Header.js

import React from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="certificates" smooth={true} duration={500}>
              Certificates
            </Link>
          </li>
          <li>
            <Link to="blogs" smooth={true} duration={500}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="about-me" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          </ul>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;

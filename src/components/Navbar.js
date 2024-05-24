// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Grace Christian School Projects</h1>
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

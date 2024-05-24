// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>Information about Grace Christian School and its Computer Science program.</p>
      <p>Learn more about our program on our <a href="https://www.gracechristianschools.us/" target="_blank" rel="noopener noreferrer">website</a>.</p>
    </section>
  );
};

export default About;

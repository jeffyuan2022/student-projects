// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Header />
      </Element>
      <Element name="projects">
        <ProjectList />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;



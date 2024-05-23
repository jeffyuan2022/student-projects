// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;

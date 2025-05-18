import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProjectSection from './components/ProjectSection';
import SkillsAndCertifications from './components/SkillsAndCertifications';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainApp />
      </Router>
    </ThemeProvider>
  );
}

function MainApp() {
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header className="navbar">
        <div className="logo">DevCloud<span></span></div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Work</Link></li>
            <li><Link to="/skillscertificates">My Creds</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a className="cta" href="/contact">Let's Talk</a></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/skillscertificates" element={<SkillsAndCertifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

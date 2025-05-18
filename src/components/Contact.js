import React from 'react';
import '../css/Contact.css';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectSection from './ProjectSection';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contact <span className="highlight">Me</span></h1>
      <p className="contact-subtitle">Get in touch with me to get the ball rolling!</p>

      <div className="contact-icons">
        <div className="contact-card">
          <i className="fas fa-envelope icon"></i>
          <h3>Email</h3>
          <a href="mailto:deekshithadammu2244@gmail.com">Mail your message</a>
        </div>

        <div className="contact-card">
          <i className="fas fa-phone icon"></i>
          <h3>Phone</h3>
          <p>+91 6304848602</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-project-diagram icon"></i>
          <h3>Project Planner</h3>
          <Link to="/projects">Launch It</Link>
          <Routes>
            <Route path='/projects' element={<ProjectSection/>}></Route>
          </Routes>
        </div>

        <div className="contact-card">
  <i className="fab fa-github icon"></i>
  <h3>GitHub</h3>
  <a href="https://github.com/deekshi25" target="_blank" rel="noreferrer">Visit</a>
</div>


        <div className="contact-card">
          <i className="fab fa-linkedin icon"></i>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/dammu-deekshitha-91ab8b247/" target="_blank" rel="noreferrer">Connect</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import '../css/About.css';
import profileImage from '../assets/about-profile.jpg'; // Replace with your image path

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>
        <div className="about-right">
          <h1>DAMMU DEEKSHITHA</h1>
          <h3>A Bit About Me</h3>
          <p>
            Hello! I am a B.Tech student specializing in Computer Science and Engineering with a focus on Cloud and Edge Computing. As a fresh graduate stepping into the world of technology, I bring with me a strong foundation in programming, web development and cloud platforms — and an even stronger curiosity to explore and grow.
          </p>
          
          <p>
            Beyond academics, I’m passionate about sports and reading books. These interests have helped shape my personality — making me disciplined, creative and constantly eager to absorb new knowledge. I believe that learning doesn’t stop at the classroom and that every challenge is an opportunity to grow.
          </p>
          <p>
            I’m an active learner, a good listener and a team player who thrives in collaborative environments. My goal is to contribute meaningfully wherever I go and continue learning on the journey to becoming a well-rounded software professional.
          </p>
          <div className="about-tags">
            <span className="tag resume">Frontend</span>
            <span className="tag research">Cloud Services</span>
            <span className="tag outreach">React.js</span>
            <span className="tag personal">Programming</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

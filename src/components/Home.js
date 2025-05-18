import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../css/Home.css';
import profile from '../assets/profile.jpeg';

function Home() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`hero ${darkMode ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <div className="text">
          <h1>Hey! I am <br /><span>Web Developer</span></h1>
          <p>
            I am a B.Tech Computer Science Engineering student, with a specialization in Cloud and Edge Computing. 
            I have a strong foundation in web development and a passion for building responsive and user-friendly applications. Though I'm fresh to the industry, I have hands-on experience working on real-time academic and personal projects. I'm eager to contribute, learn and grow in a professional environment.
          </p>
          <p>
            I may not have formal industry experience yet, but I have worked on several academic and personal projects that showcase my skills and willingness to learn. I enjoy solving problems, experimenting with new tools and building clean, user-friendly applications using modern technologies.
          </p>
          <div className="buttons">
            <button className="btn learn">Learn More</button>
            <button className="btn hire">Hire Me</button>
          </div>
        </div>
        <div className="image">
          <img src={profile} alt="Web Developer" />
        </div>
      </div>
    </div>
  );
}

export default Home;

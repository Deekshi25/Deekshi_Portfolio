import React from "react";
import "../css/SkillsAndCertifications.css";

const SkillsAndCertifications = () => {
  const skills = [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Spring Boot", level: 85 },
    { name: "AWS", level: 75 },
    { name: "DynamoDB", level: 90 },
    { name: "Lambda", level: 85 },
    { name: "C", level: 90 },
    { name: "Git", level: 75 }
  ];

  const certifications = [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      link: "https://www.credly.com/badges/2fef4c7d-c433-41bb-8ab5-a0dbc43a3a1c"
    }
  ];

  return (
    <div className="skills-certifications">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <h2>Certifications</h2>
      <ul className="certification-list">
        {certifications.map((cert, index) => (
          <li key={index}>
            <strong>{cert.title}</strong> — {cert.issuer} <br />
            <a href={cert.link} target="_blank" rel="noreferrer">View Certificate</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsAndCertifications;

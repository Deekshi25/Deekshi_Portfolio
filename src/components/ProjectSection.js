import React from 'react';
import '../css/ProjectSection.css'; // Use this or Tailwind if preferred
import projects from '../data/Projects'; // Your project data array

const ProjectSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="section-title">My Works</h1>
      <p className="section-subtitle">
        Witness the beauty of creativity through my lens.
        <br />
        A mix of academic projects, passion pieces and hands-on explorations.
      </p>
      
      <div className="projects-carousel">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

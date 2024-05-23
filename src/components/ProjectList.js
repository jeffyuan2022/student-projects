// src/components/ProjectList.js
import React from 'react';

const ProjectList = () => {
  const projects = [
    // Sample data
    { id: 1, title: 'Project 1', url: 'https://scratch.mit.edu/projects/123456' },
    { id: 2, title: 'Project 2', url: 'https://scratch.mit.edu/projects/789012' },
  ];

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <iframe src={project.url} width="485" height="402" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

// src/components/ProjectList.js
import React from 'react';

const ProjectList = () => {
  const projects = [
    { id: 1017085571, title: '2024 new project', author: 'Katherine Wu' },
    { id: 1023826293, title: 'Geometry Dash', author: 'Yitian Xu' },
    { id: 1017097971, title: 'flying cat game', author: 'Ariana Bembenek' },
    { id: 1017097965, title: 'cute cat', author: 'Zoey Bembenek' },
    { id: 1017088134, title: 'None', author: 'Alexander Qi' },
    { id: 1015707260, title: 'None', author: 'Caleb Liu' },
  ];

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h2>{project.title}</h2>
          <iframe
            src={`https://scratch.mit.edu/projects/${project.id}/embed`}
            allowTransparency="true"
            width="485"
            height="402"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            title={project.title}
          ></iframe>
          <h3>By {project.author}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

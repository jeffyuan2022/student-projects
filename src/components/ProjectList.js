// src/components/ProjectList.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Search from './Search';
import ProjectModal from './ProjectModal';
import './ProjectList.css';

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    { id: 1017085571, title: '2024 new project', author: 'Katherine Wu' },
    { id: 1023826293, title: 'Geometry Dash', author: 'Yitian Xu' },
    { id: 1017097971, title: 'flying cat game', author: 'Ariana Bembenek' },
    { id: 1017097965, title: 'cute cat', author: 'Zoey Bembenek' },
    { id: 1017088134, title: 'None', author: 'Alexander Qi' },
    { id: 1015707260, title: 'None', author: 'Caleb Liu' },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search onSearch={setSearchTerm} />
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          className="project"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedProject(project)}
        >
          <h2>{project.title}</h2>
          <iframe
            src={`https://scratch.mit.edu/projects/${project.id}/embed`}
            allowtransparency="true"
            width="485"
            height="402"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            title={project.title}
            sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
            allow="camera; microphone; fullscreen"
          ></iframe>
          <h3>By {project.author}</h3>
        </motion.div>
      ))}
      <ProjectModal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectList;

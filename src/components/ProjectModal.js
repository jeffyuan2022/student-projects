// src/components/ProjectModal.js
import React from 'react';
import Modal from 'react-modal';

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Project Details">
      <h2>{project.title}</h2>
      <p>Author: {project.author}</p>
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
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ProjectModal;

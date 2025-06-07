import React from 'react';
import './PageStyles.css';

const Projects = () => {
  return (
    <div className="fancy-page">
      <h1>Our Projects</h1>
      <ul className="fancy-list">
        <li>🚀 Real-time Chat App</li>
        <li>📊 Interactive Dashboard with Live Data</li>
        <li>🎮 Multiplayer Game using WebSockets</li>
        <li>📱 Mobile-first PWA for Task Management</li>
      </ul>
    </div>
  );
};

export default Projects;

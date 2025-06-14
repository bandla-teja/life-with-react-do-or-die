// src/components/Home.js
import React from 'react';
import './Home.css';

const cards = [
  {
    title: 'Fast Performance',
    description: 'Our app loads lightning fast and feels super smooth.',
    icon: '⚡',
  },
  {
    title: 'Modern Design',
    description: 'Clean and stylish UI with responsive layout.',
    icon: '🎨',
  },
  {
    title: 'Secure',
    description: 'We care about your privacy and data safety.',
    icon: '🔒',
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to VC Catalyst 2025</h1>
        <p>Team - Fight Club</p>
      </section>

      <section className="features">
        {cards.map(({ title, description, icon }) => (
          <div key={title} className="card">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;

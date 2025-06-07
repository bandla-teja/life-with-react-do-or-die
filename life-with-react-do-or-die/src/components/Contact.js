import React from 'react';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="fancy-page">
      <h1>Contact Us</h1>
      <p>If you'd like to collaborate or have any questions, feel free to reach out!</p>
      <div className="contact-card">
        <p><strong>Email:</strong> himateja@example.com</p>
        <p><strong>Phone:</strong> +91 12345 67890</p>
        <p><strong>Location:</strong> Hyderabad, India</p>
      </div>
    </div>
  );
};

export default Contact;
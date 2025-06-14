// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import './Navbar.css';
import logo from '../assets/image copy 2.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Projects',
    path: '/projects',
    children: [
      { name: 'Web', path: '/projects/web' },
      { name: 'Mobile', path: '/projects/mobile' },
      { name: 'AI/ML', path: '/projects/ai' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const userProfile = {
    name: 'Hima Teja',
    email: 'himateja@example.com',
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LEFT: Logo */}
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* CENTER: Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>

              {/* Render Submenu if children exist */}
              {link.children && (
                <ul className="submenu">
                  {link.children.map((child) => (
                    <li key={child.name}>
                      <Link to={child.path} onClick={() => setMenuOpen(false)}>
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>


        {/* RIGHT: Profile + Menu */}
        <div className="navbar-right">
          <div className="profile-icon-wrapper" onClick={() => setProfileOpen(!profileOpen)}>
            <FiUser className="profile-icon" />
            {profileOpen && (
              <div className="profile-dropdown">
                <p><strong>{userProfile.name}</strong></p>
                <p>{userProfile.email}</p>
                <Link to="/profile">View Profile</Link>
              </div>
            )}
          </div>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

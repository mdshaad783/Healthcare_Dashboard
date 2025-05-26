import React from 'react';
import { navLinks } from '../../data/navigationLink';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <h2 className="sidebar-title">General</h2>
    <ul className="nav-links">
      {navLinks.map((link, idx) => (
        <li key={idx} className="nav-item">{link}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;

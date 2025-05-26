import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Healthcare.</div>
    <input className="search" type="text" placeholder="Search..." disabled />
    <div className="header-icons">
      <span className="notification">🔔</span>
      <span className="user">👤 John Doe</span>
      <button className="add-btn">+</button>
    </div>
  </header>
);

export default Header;
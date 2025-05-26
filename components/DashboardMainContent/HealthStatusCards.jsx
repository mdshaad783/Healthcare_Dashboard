// src/components/DashboardMainContent/HealthStatusCards.jsx

import React from 'react';
import healthCards from '../../data/healthCarsdData';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div key={index} className="health-card">
          <div className="health-card-header">
            <span className={`status-dot ${card.status.toLowerCase()}`}></span>
            <h4>{card.title}</h4>
          </div>
          <p className="health-date">{card.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;

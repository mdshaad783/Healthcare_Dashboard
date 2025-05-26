// src/components/DashboardMainContent/AnatomySection.jsx

import React from 'react';
import healthData from '../../data/healthData';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container">
        <img
          src="../../src/assets/anatomy-placeholder.jpg"
          alt="Human Anatomy"
          className="anatomy-image"
        />
        {healthData.map((item, index) => (
          <div
            key={index}
            className={`health-indicator ${item.status.toLowerCase()}`}
            style={{
              top: item.position.top,
              left: item.position.left,
            }}
          >
            <div className="indicator-dot" />
            <span className="indicator-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;

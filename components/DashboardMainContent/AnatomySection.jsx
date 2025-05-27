// src/components/DashboardMainContent/AnatomySection.jsx

import React from 'react';
import healthData from '../../data/healthData';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/202403_human_anatomy_skeleton_and_organs.svg/640px-202403_human_anatomy_skeleton_and_organs.svg.png"
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

// src/components/DashboardMainContent/DashboardOverview.jsx

import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </div>
  );
};

export default DashboardOverview;

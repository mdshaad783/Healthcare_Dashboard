// src/components/DashboardMainContent/DashboardMainContent.jsx

import React from 'react';
import DashboardOverview from './DashboardOverview';
// import CalendarView from './CalendarView';
// import UpcomingSchedule from './UpcomingSchedule';
// import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css'; // Optional: for layout-specific styles

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main-content">
      <section className="overview-section">
        <DashboardOverview />
      </section>

      <section className="calendar-activity-container">
        {/* <CalendarView /> */}
        {/* <ActivityFeed /> */}
      </section>

      <section className="upcoming-schedule-section">
        {/* <UpcomingSchedule /> */}
      </section>
    </main>
  );
};

export default DashboardMainContent;

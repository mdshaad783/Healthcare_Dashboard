import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import DashboardMainContent from '../components/DashboardMainContent/DashboardMainContent';
import './App.css';
import SimpleAppointmentCard from '../components/DashboardMainContent/SimpleAppointmentCard';


const App = () => (
  <div className="app-container">
    <Sidebar />
    <div className="main-content">
      <Header />
      <DashboardMainContent />
    </div>
    <SimpleAppointmentCard title="Cardiologist" time="10:30 AM" icon="❤️" />

  </div>
  
);

export default App;
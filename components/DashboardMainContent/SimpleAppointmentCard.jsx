import React from 'react';
import './SimpleAppointmentCard.css'; // Create this file for styling
import { CalendarDays, Clock, Stethoscope } from 'lucide-react'; // Example icons

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-card">
      <div className="icon">{icon}</div>
      <div className="details">
        <h4 className="title">{title}</h4>
        <div className="time">
          <Clock size={16} className="clock-icon" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;

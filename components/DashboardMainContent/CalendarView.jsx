import React from 'react';
import './CalendarView.css';

// Mock appointment data for calendar days
const appointmentsByDate = {
  4: ['09:00', '11:00'],
  11: ['13:00'],
  18: ['15:00'],
};

// Static appointment detail cards below the calendar
const appointmentDetails = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00 AM - 10:00 AM',
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00 AM - 12:00 PM',
  },
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// October 2021 starts on Friday (index 5)
const firstDayIndex = 5;
const totalDays = 31;

const CalendarView = () => {
  // Create an array representing the calendar grid with blank days before start
  const calendarDays = [];

  // Add blank days for empty slots before first day of month
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= totalDays; day++) {
    calendarDays.push(day);
  }

  return (
    <section className="calendar-view">
      <header className="calendar-header">
        <h3>October 2021</h3>
      </header>

      <div className="calendar-grid">
        {/* Days of week header */}
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}

        {/* Calendar dates */}
        {calendarDays.map((day, idx) =>
          day ? (
            <div key={idx} className="calendar-day-cell">
              <div className="date-number">{day}</div>
              <div className="appointments-time-list">
                {appointmentsByDate[day]?.map((time, i) => (
                  <span key={i} className="appointment-time">
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div key={idx} className="calendar-day-cell empty"></div>
          )
        )}
      </div>

      <div className="appointment-details">
        {appointmentDetails.map(({ id, title, time }) => (
          <div key={id} className="appointment-card">
            <h4 className="appointment-title">{title}</h4>
            <p className="appointment-time">{time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;

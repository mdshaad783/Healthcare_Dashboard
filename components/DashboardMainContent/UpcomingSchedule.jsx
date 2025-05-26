import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard';
import './UpcomingSchedule.css';

// Mock data for upcoming appointments (you can also import from a data file)
const upcomingScheduleData = [
  {
    day: 'On Thursday',
    appointments: [
      { id: 1, title: 'Health checkup complete', time: '08:00 AM', icon: '✅' },
      { id: 2, title: 'Ophthalmologist', time: '10:00 AM', icon: '👁️' },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { id: 3, title: 'Cardiologist', time: '11:30 AM', icon: '❤️' },
      { id: 4, title: 'Neurologist', time: '02:00 PM', icon: '🧠' },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <section className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>
      {upcomingScheduleData.map(({ day, appointments }) => (
        <div key={day} className="schedule-day-group">
          <h4 className="schedule-day">{day}</h4>
          <div className="appointments-list">
            {appointments.map(({ id, title, time, icon }) => (
              <SimpleAppointmentCard
                key={id}
                title={title}
                time={time}
                icon={icon}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingSchedule;

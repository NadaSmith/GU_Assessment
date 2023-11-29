import React from 'react';

const AttendeeList = ({ attendees }) => {
  const maxDisplay = 3;

  return (
    <div>
      <h2>Attendee List</h2>
      <div className='attendeeContainer'>
        {attendees.slice(0, maxDisplay).map((attendee, index) => (
          <div className='attendeeBox' key={index}>
            {attendee.first_name} {attendee.last_name} 
            {attendee.school_year}
            {attendee.registered}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendeeList;

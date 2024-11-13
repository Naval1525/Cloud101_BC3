import React from 'react';

const EventSchedule = () => {
  const events = [
    { time: '5:30 PM', title: 'Welcome & Introduction' },
    { time: '6:00 PM', title: 'Quiz-1' },
    { time: '6:05 PM', title: 'Scope of Cloud Computing' },
    { time: '6:30 PM', title: 'Quiz-2' },
    { time: '6:35 PM', title: 'End-Sem material' },
    { time: '6:45 PM', title: 'Q&A' },
    { time: '7:00 PM', title: 'End-of-Event' }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Event Schedule</h2>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-24 font-semibold text-blue-600">
              {event.time}
            </div>
            <div className="flex-1 text-gray-800">
              {event.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
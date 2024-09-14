import React from 'react';

export default function EventOrganizer({ data }) {
  return (
    <div className="event-organizer">
      <h3>Event Organizer View</h3>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.event}</h3>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Location:</strong> {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

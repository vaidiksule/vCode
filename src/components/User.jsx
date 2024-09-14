import React, { useRef } from 'react';

export default function User({ onSubmit }) {
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const eventRef = useRef(null);
  const dateRef = useRef(null);
  const locationRef = useRef(null);

  function fetchData(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const contact = contactRef.current.value;
    const eventField = eventRef.current.value;
    const date = dateRef.current.value;
    const location = locationRef.current.value;

    const formData = {
      name,
      contact,
      event: eventField,
      date,
      location,
    };

    onSubmit(formData); // Pass data to App component

    nameRef.current.value = '';
    contactRef.current.value = '';
    eventRef.current.value = '';
    dateRef.current.value = '';
    locationRef.current.value = '';
  }

  return (
    <div className="form-container">
      <h3>Client View</h3>
      <form>
        <div className="nameContact">
          <input type="text" id="name" placeholder='Name' required ref={nameRef} />
          <input type="tel" id="contact" placeholder='Contact No' required ref={contactRef} />
        </div>
        <div className="dateTimeLocation">
          <input type="text" id="event" placeholder='Event' required ref={eventRef} />
          <input type="date" id="date" required ref={dateRef} />
          <input type="text" id="location" placeholder='Location' required ref={locationRef} />
          <button type="submit" onClick={fetchData}>Send</button>
        </div>
      </form>
    </div>
  );
}

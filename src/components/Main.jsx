import React from 'react'

export default function Main() {
  
  function fetchData(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const eventField = document.getElementById('event').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;

    const formData = {
      name,
      contact,
      event: eventField,
      date,
      location,
    }

    console.log('Form Data:', JSON.stringify(formData, null, 2));
  }

  return (
    <>
    <div className="form-container">
      <form>
        <div className="nameContact">
          <input type="text" id="name" placeholder='Name' required/>
          <input type="tel" id="contact" placeholder='Contact No' required/>
        </div>
        <div className="dateTimeLocation">
          <input type="text" id="event" placeholder='Event' required/>
          <input type="date" id="date"  required/>
          <input type="text" id="location" placeholder='Location'required/>
          <button type="submit" onClick={fetchData}>Send</button>
        </div>
      </form>
    </div>
    </>
  )
}


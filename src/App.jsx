import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import User from './components/User';
import EventOrganizer from './components/EventOrganizer';
import axios from 'axios';

function App() {
  const [selectedView, setSelectedView] = useState('User');
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    // Fetch form data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/formdata');
        setFormDataList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Save form data to local storage whenever formDataList changes
    localStorage.setItem('formDataList', JSON.stringify(formDataList));
  }, [formDataList]);

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/submit', formData);
      setFormDataList([...formDataList, response.data]);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <Header onViewChange={handleViewChange} />
      <div className="main-content">
        {selectedView === 'User' && <User onSubmit={handleFormSubmit} />}
        {selectedView === 'EventOrganizer' && <EventOrganizer data={formDataList} />}
      </div>
    </>
  );
}

export default App;

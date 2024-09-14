// src/Map.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Replace with your Google Maps API Key
const API_KEY = process.env.GOOGLE_MAP_API_KEY;

// Define the map container style and default center position
const mapContainerStyle = {
  height: "400px",
  width: "800px"
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey={API_KEY} // Load the Google Maps API
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
      >
        {/* Add any additional map components or markers here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

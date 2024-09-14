// Header.jsx
import React from 'react';

export default function Header({ onViewChange }) {
  return (
    <header>
      <div className="logoContaineer">
        <img src="logo.png" alt="logo" />
      </div>
      <ul>
        <li onClick={() => onViewChange('User')}>Client</li>
        <li onClick={() => onViewChange('EventOrganizer')}>Event Organizer</li>
      </ul>
    </header>
  );
}

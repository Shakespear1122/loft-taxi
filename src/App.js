import React, { useState } from 'react';
import LoginPage from './components/authPage';
import TaxiProfile from './components/profile';
import TaxiMap from './components/map';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentPage('map');
  };

  const handleRegistr = (e) => {
    e.preventDefault();
    setCurrentPage('map');
  };

  const handleMapClick = e => {
    setCurrentPage('map');
  };

  const handleprofileClick = e => {
    setCurrentPage('profile');
  };

  const handleLogout = e => {
    setCurrentPage('login');
  };

  if (currentPage === 'login') { 
    return <LoginPage handleLogin={handleLogin} handleRegistr={handleRegistr} />
  } 
  if (currentPage === 'map') return (
    <TaxiMap
      handleMapClick={handleMapClick}
      handleprofileClick={handleprofileClick}
      handleLogout={handleLogout}
    />
  )
  if (currentPage === 'profile') return (
    <TaxiProfile 
      handleMapClick={handleMapClick}
      handleprofileClick={handleprofileClick}
      handleLogout={handleLogout}
    />
  )
}

export default App;

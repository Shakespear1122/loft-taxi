import React, { useState } from 'react';
import LoginPage from './components/authPage';
import TaxiProfile from './components/profile';
import TaxiMap from './components/map';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  const handlePageRedirect = (e) => {
    e.preventDefault();
    setCurrentPage(e.target.name);
  };
  
  const pages = {
    'login': <LoginPage 
        handleLogin={handlePageRedirect} 
        handleRegistr={handlePageRedirect} />,
    'map': <TaxiMap
        handleMapClick={handlePageRedirect}
        handleprofileClick={handlePageRedirect}
        handleLogout={handlePageRedirect} />,
    'profile': <TaxiProfile 
        handleMapClick={handlePageRedirect}
        handleprofileClick={handlePageRedirect}
        handleLogout={handlePageRedirect} />,
  };

  return pages[currentPage];
};

export default App;

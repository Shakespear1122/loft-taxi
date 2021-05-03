import React, { useState } from 'react';
import AuthPage from './components/authPage';
import TaxiProfile from './components/profile';
import TaxiMap from './components/map';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const goToPage = (page, e) => {
    setCurrentPage(page);
  };
  
  const pages = {
    'login': <AuthPage goToPage={goToPage} />,
    'map': <TaxiMap goToPage={goToPage} />,
    'profile': <TaxiProfile goToPage={goToPage} />,
  };

  return pages[currentPage]
};

export default App;

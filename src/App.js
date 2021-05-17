import React, { useContext, useState } from 'react';
import AuthPage from './components/authPage';
import TaxiProfile from './components/profile';
import TaxiMap from './components/map';
import { ContextApp } from './authContext';

function App() {
  const [currentPage, setCurrentPage] = useState();
  const { isLoggedIn } = useContext(ContextApp);

  const goToPage = (page) => {
      setCurrentPage(page);
  };  
  
  const pages = {
    'login': <AuthPage goToPage={goToPage} />,
    'map': <TaxiMap goToPage={goToPage} />,
    'profile': <TaxiProfile goToPage={goToPage} />,
  };

  return (
      isLoggedIn ? pages[currentPage] : pages['login']
    )
};

export default App;

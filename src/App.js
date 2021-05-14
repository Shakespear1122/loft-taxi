import React, { useState } from 'react';
import AuthPage from './components/authPage';
import TaxiProfile from './components/profile';
import TaxiMap from './components/map';

export const ContextApp = React.createContext();

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    setIsLoggedIn(true);
    setCurrentPage('map');
  };

  const registr = (name, email, password) => {
    console.log('success')
  }

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };  
  
  const pages = {
    'login': <AuthPage goToPage={goToPage} />,
    'map': <TaxiMap goToPage={goToPage} />,
    'profile': <TaxiProfile goToPage={goToPage} />,
  };

  return (
    <ContextApp.Provider value={{login, registr, logout, isLoggedIn}}>
      {pages[currentPage]}
    </ContextApp.Provider>
    )
};

export default App;

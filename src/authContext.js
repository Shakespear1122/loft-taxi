import React, { useState } from 'react';

export const AuthContext = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (email, password) => {
        setIsLoggedIn(true);
    };

    const registr = (name, email, password) => {
        console.log('success registration!')
    }

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <ContextApp.Provider value={{ login, registr, logout, isLoggedIn }} >
            {children}
        </ContextApp.Provider>
    )    
};

export const ContextApp = React.createContext();
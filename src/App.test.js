import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { ContextApp } from './authContext';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  App: () => ({}),
}));

it('App is rendering without crash', () => {
    const login = jest.fn();
    const isLoggedIn = false;
    render(
        <ContextApp.Provider value={{login, isLoggedIn}}>
            <App />
        </ContextApp.Provider>
    );
    expect(screen.getByTestId('home-container')).toBeTruthy();
});
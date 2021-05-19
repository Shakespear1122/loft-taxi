import React from 'react';
import AuthPage from './authPage';
import { render, screen } from '@testing-library/react';
import { ContextApp } from '../authContext';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    App: () => ({}),
  }));

it('authPage render without crash', () => {
  const login = jest.fn();
    render(
    <ContextApp.Provider value={{login}} >
      <AuthPage />
    </ContextApp.Provider>);
    expect(screen.getByTestId('auth-container')).toBeTruthy();
});
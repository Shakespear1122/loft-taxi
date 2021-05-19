import React from 'react';
import Login from './login';
import { ContextApp } from '../../authContext';
import { render, screen } from '@testing-library/react';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Login: () => ({}),
  }));

it('Login is rendering without crash', () => {
    const login = (email,password) => {
    };
    const userInfo = {
        email: 'email',
        password: 'pass'
    };
    render(
        <ContextApp.Provider value={login}>
            <Login userInfo={userInfo} />
        </ContextApp.Provider>);
    expect(screen.getByTestId('login-header')).toBeTruthy();
});

it('Form is rendering', () => {
    const login = (email,password) => {
    };
    const userInfo = {
        email: 'email',
        password: 'pass'
    };
    const { getByTestId } = render(
        <ContextApp.Provider value={login}>
            <Login userInfo={userInfo} />
        </ContextApp.Provider>);

    expect(getByTestId('form')).toBeTruthy();
});
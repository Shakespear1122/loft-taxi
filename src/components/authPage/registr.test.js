import React from 'react';
import ReactDOM from 'react-dom';
import Registr from './login';
import { ContextApp } from '../../authContext';
import { render } from '@testing-library/react';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Registr: () => ({}),
  }));
  
it('Login is rendering without crash', () => {
    const login = (email,password) => {
    };
    const userInfo = {
        email: 'email',
        password: 'pass'
    };
    const div = document.createElement('div');
    ReactDOM.render(
        <ContextApp.Provider value={login}>
            <Registr userInfo={userInfo} />
        </ContextApp.Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
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
            <Registr userInfo={userInfo} />
        </ContextApp.Provider>);

    expect(getByTestId('form')).toBeTruthy();
});
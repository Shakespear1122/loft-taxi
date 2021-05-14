import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import { ContextApp } from '../../App';
import { findAllByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


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
            <Login userInfo={userInfo} />
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
            <Login userInfo={userInfo} />
        </ContextApp.Provider>);

    expect(getByTestId('form')).toBeTruthy();
});
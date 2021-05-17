import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { ContextApp } from './authContext';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  App: () => ({}),
}));

it('App is rendering without crash', () => {
    const login = jest.fn();
    const isLoggedIn = false;
    const wrapper = shallow(
        <ContextApp.Provider value={{login, isLoggedIn}}>
            <App />
        </ContextApp.Provider>
    );
    expect(wrapper.exists);
});
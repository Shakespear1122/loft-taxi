import React from 'react';
import AuthPage from './authPage';
import { shallow } from 'enzyme';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    App: () => ({}),
  }));

it('authPage render without crash', () => {
    const wrapper = shallow(<AuthPage />)
    expect(wrapper.exists);
});
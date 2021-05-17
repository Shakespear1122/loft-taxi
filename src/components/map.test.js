import React from 'react';
import TaxiMap from './map';
import { shallow } from 'enzyme';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    TaxiMap: () => ({}),
  }));

it('authPage render without crash', () => {
    const goToPageMock = jest.fn();
    const wrapper = shallow(<TaxiMap goToPage={goToPageMock} />)
    expect(wrapper.exists);
});
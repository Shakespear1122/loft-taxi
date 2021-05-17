import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import { ContextApp } from '../../authContext';
// import { render } from '@testing-library/react'
// import { fireEvent, getByText, screen } from '@testing-library/dom'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Header: () => ({}),
  }));

it('header is rendering without crash', () => {
    const goToPageMock = jest.fn();
    const mockLogin = jest.fn();
    
    const wrapper = shallow(
        <ContextApp.Provider value={mockLogin}>
            <Header goToPage={goToPageMock} />
        </ContextApp.Provider>
        );
    expect(wrapper.exists);

});
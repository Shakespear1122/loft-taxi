import React from 'react';
import Header from './header';
import { ContextApp } from '../../authContext';
import { render, screen } from '@testing-library/react';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Header: () => ({}),
  }));

it('header is rendering without crash', () => {
    const goToPageMock = jest.fn();
    const mockLogin = jest.fn();
    
    render(
        <ContextApp.Provider value={mockLogin}>
            <Header goToPage={goToPageMock} />
        </ContextApp.Provider>
        );
    expect(screen.getByTestId('header-container')).toBeTruthy();

});
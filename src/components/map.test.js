import React from 'react';
import TaxiMap from './map';
import { render, screen } from '@testing-library/react';
import { ContextApp } from '../authContext';

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({ remove: () => {} })),
  }));

it('authPage render without crash', () => {
    const goToPageMock = jest.fn();
    const logout = jest.fn();
    render(
    <ContextApp.Provider value={{logout}}>
        <TaxiMap goToPage={goToPageMock} />
    </ContextApp.Provider>)
    expect(screen.getByTestId('map-container')).toBeTruthy();
});
import React from 'react';
import TaxiProfile from './profile';
import { render, screen } from '@testing-library/react';
import { ContextApp } from '../authContext';
import { ExpansionPanelActions } from '@material-ui/core';

it('authPage render without crash', () => {
    const goToPageMock = jest.fn();
    const logout = jest.fn();
    render(
        <ContextApp.Provider value={{logout}} >
            <TaxiProfile goToPage={goToPageMock} />)
        </ContextApp.Provider>)
    expect(screen.getByTestId('profile-container')).toBeTruthy();
});
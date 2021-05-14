import React from 'react';
import ReactDOM from 'react-dom';
import AuthPage from './authPage';
import { findAllByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContextApp } from '../App';
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from '@material-ui/core';

it('authPage render without crash', () => {
    const wrapper = shallow(<AuthPage />)
    expect(wrapper.exists);
});
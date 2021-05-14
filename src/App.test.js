import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TaxiMap from './components/map';
import AuthPage from './components/authPage';


it('App is rendering without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
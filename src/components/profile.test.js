import React from 'react';
import TaxiProfile from './profile';
import { shallow } from 'enzyme';


it('authPage render without crash', () => {
    const goToPageMock = jest.fn();
    const wrapper = shallow(<TaxiProfile goToPage={goToPageMock} />)
    expect(wrapper.exists);
});
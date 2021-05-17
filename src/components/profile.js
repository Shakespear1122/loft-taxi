import React from 'react';
import Header from './common/header';
import PropTypes from 'prop-types';

function TaxiProfile({ goToPage }) {
    return (
        <div>
            <Header goToPage={goToPage} />
            <div data-testid='profile-page' style={{textAlign: 'center', paddingTop: '40px'}}>Profile</div>
        </div>
    )
};

TaxiProfile.propTypes = {
    goToPage: PropTypes.func,
};

export default TaxiProfile;
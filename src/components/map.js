import React from 'react';
import Header from './common/header';
import PropTypes from 'prop-types';

function TaxiMap({ goToPage }) {
    return (
        <div>
            <Header goToPage={goToPage} />
            <div style={{textAlign: 'center', paddingTop: '40px'}}>MAP</div>
        </div>
    )
};

TaxiMap.propTypes = {
    goToPage: PropTypes.func,
};

export default TaxiMap;
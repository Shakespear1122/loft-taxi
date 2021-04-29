import React from 'react';
import Header from './common/header';

function TaxiMap({ handleMapClick, handleprofileClick, handleLogout }) {
    return (
        <div>
            <Header 
                handleMapClick={handleMapClick}
                handleprofileClick={handleprofileClick}
                handleLogout={handleLogout}
            />
            <div style={{textAlign: 'center', paddingTop: '40px'}}>MAP</div>
        </div>
    )
};

export default TaxiMap;
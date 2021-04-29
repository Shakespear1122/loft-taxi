import React from 'react';
import Header from './common/header';

function TaxiProfile({ handleMapClick, handleprofileClick, handleLogout }) {
    return (
        <div>
            <Header 
                handleMapClick={handleMapClick}
                handleprofileClick={handleprofileClick}
                handleLogout={handleLogout}
            />
            <div style={{textAlign: 'center', paddingTop: '40px'}}>Profile</div>
        </div>
    )
};

export default TaxiProfile;
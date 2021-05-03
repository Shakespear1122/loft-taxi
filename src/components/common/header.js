import React from 'react';

function Header({ handleMapClick, handleprofileClick, handleLogout }) {
    return (
        <div className='header'>
            <p>Logo</p>
            <a name='map' href='#' onClick={handleMapClick}>Карта</a>
            <a name='profile' href='#' onClick={handleprofileClick}>Профиль</a>
            <a name='login' href='#' onClick={handleLogout}>Выйти</a>
        </div>
    )
};

export default Header;
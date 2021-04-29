import React from 'react';

function Header({ handleMapClick, handleprofileClick, handleLogout }) {
    return (
        <div className='header'>
            <p>Logo</p>
            <a href='#' onClick={handleMapClick}>Карта</a>
            <a href='#' onClick={handleprofileClick}>Профиль</a>
            <a href='#' onClick={handleLogout}>Выйти</a>
        </div>
    )
};

export default Header;
import React from 'react';
import PropTypes from 'prop-types';

function Header({ goToPage }) {
    const handlePage = (page) => {
        goToPage(page);
    };

    return (
        <div className='header'>
            <p>Logo</p>
            <a href='#' onClick={() => handlePage('map')} >Карта</a>
            <a href='#' onClick={() => handlePage('profile')} >Профиль</a>
            <a href='#' onClick={() => handlePage('login')} >Выйти</a>
        </div>
    )
};

Header.propTypes = {
    goToPage: PropTypes.func.isRequired,
};

export default Header;
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ContextApp } from '../../authContext';
import { AppBar, Toolbar, Link, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000',
    },
    logo: {
        flexGrow: 1
    }
}))

function Header({ goToPage }) {
    const classes = useStyles();
    const { logout } = useContext(ContextApp);
    
    const handlePage = (page) => {
        goToPage(page);
    };

    return (
        <div data-testid='header-container' className={classes.root}>
            <AppBar className={classes.root}>
                <Toolbar>
                    <div className={classes.logo} ><Logo/></div>
                    <Button data-testid="map" style={{color: '#fff'}} href='#' onClick={() => handlePage('map')} >Карта</Button>
                    <Button data-testid="profile" style={{color: '#fff'}} onClick={() => handlePage('profile')} >Профиль</Button>
                    <Button data-testid="exit-button" style={{color: '#fff'}} href='#' onClick={() => logout()} >Выйти</Button>
                </Toolbar>
            </AppBar>
        </div>
        
    )
};

Header.propTypes = {
    goToPage: PropTypes.func.isRequired,
};

export default Header;
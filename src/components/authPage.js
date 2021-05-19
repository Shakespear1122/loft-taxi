import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'loft-taxi-mui-theme';
import { Paper } from '@material-ui/core';
import Login from '../components/authPage/login';
import Registr from '../components/authPage/registr';
import backgroundImage from '../assets/imgs/authBackground.jpg';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '520px',
        margin: '0 auto',
        borderRadius: '20px',
        padding: '60px 0',
    },
    authPage: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
    },
    logoContainer: {
        width: '33.33%',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: '66.67%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
    },

}));

function AuthPage({ goToPage }) {
    const classes = useStyles();
    const [ isNotRegistred, setIsNotRegistred ] = useState(false)

    return (
         <div data-testid='auth-container' className={classes.authPage}>
             <div className={classes.logoContainer}>
                <Logo />
             </div>
             <div className={classes.formContainer}>
                <Paper className={classes.paper} elevation={6}>
                    {!isNotRegistred ? 
                    <Login 
                        setIsNotRegistred={setIsNotRegistred}
                        goToPage={goToPage}
                    /> : 
                    <Registr
                        setIsNotRegistred={setIsNotRegistred}
                        goToPage={goToPage}
                    />}      
                </Paper>
             </div>
         </div>     
    )
            
};

AuthPage.protoTypes = {
    goToPage: PropTypes.func,
};

export default AuthPage;
import React, { useContext } from 'react';
import { Container, Typography, FormControl, TextField, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContextApp } from '../../authContext';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    margin: {
      width: '100%',
      margin: '8px 0'
    },
    form: {
        width: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 110px'
    },
    button: {
        marginTop: '70px',
        borderRadius: '30px',
        fontSize: '1.3rem',
        fontWeight: '400',

    },
    h4: {
        fontSize: '1.7rem',
        marginBottom: '2.5rem',
        fontWeight: '700'
    },
    adiitinText: {
        fontSize: '1rem',
        fontWeight: '400'
    }

}));

function Registr({ setIsNotRegistred, handleChange, userInfo }) {
    const classes = useStyles();
    const { registr } = useContext(ContextApp);

    return (
        <Container >
            <Container className={classes.container}>
                <Typography className={classes.h4} variant='h4'>Регистрация</Typography>
                <form className={classes.form} onSubmit={() => registr(userInfo.name, userInfo.password)}>
                    <FormControl className={classes.margin}>
                        <TextField
                            label='Email' 
                            onChange={handleChange}
                            required={true}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>    
                        <TextField
                            label='Как вас зовут?' 
                            onChange={handleChange}
                            required={true}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>    
                        <TextField
                            label='Придумайте пароль' 
                            onChange={handleChange}
                            required={true}
                        />
                        <Button 
                            className={classes.button} 
                            variant='contained' 
                            color='primary' 
                            type='submit'>Регистрация</Button>
                    </FormControl>
                </form>
            </Container>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <Typography>Уже есть аккаунт? 
                    <Link style={{marginLeft: '5px'}} href='#' onClick={() => setIsNotRegistred(false)}>Войти</Link>
                </Typography>
            </div>
        </Container>
    )
}

Registr.propTypes = {
    setIsNotRegistred: PropTypes.func,
}

export default Registr;
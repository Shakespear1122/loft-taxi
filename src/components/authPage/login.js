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

function Login({ setIsNotRegistred, goToPage }) {

    const classes = useStyles();
    const { login } = useContext(ContextApp);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        login(name, password);
        goToPage('map');
    }
    
    return (
        <Container >
            <Container className={classes.container}>
                <Typography data-testid='login-header' className={classes.h4} variant='h4'>Вход</Typography>
                <form data-testid='form' className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                    <FormControl className={classes.margin}>
                        <TextField
                            name='name'
                            label='Имя пользователя' 
                            required={true}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>    
                        <TextField
                            name='password'
                            label='Пароль' 
                            required={true}
                        />
                        <Button className={classes.button} variant='contained' color='primary' type='submit'>Войти</Button>
                    </FormControl>
                </form>
            </Container>
            <div style={{textAlign: 'center', marginTop: '20px'}}> 
                <Typography>Новый пользователь? 
                    <Link style={{marginLeft: '5px'}} href='#' onClick={() => setIsNotRegistred(true)}>Зарегистрируйтесь</Link>
                </Typography>
            </div>
        </Container> 
    )
}

Login.propTypes = {
    setIsNotRegistred: PropTypes.func,
}

export default Login;
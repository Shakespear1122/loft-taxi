import React, { useContext } from 'react';
import { Container, Typography, FormControl, TextField, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContextApp } from '../../App';
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

function Login({ setIsNotRegistred, handleChange, userInfo }) {
    const classes = useStyles();
    const { login } = useContext(ContextApp);
    
    return (
        <Container >
            <Container className={classes.container}>
                <Typography className={classes.h4} variant='h4'>Вход</Typography>
                <form data-testid='form' className={classes.form} onSubmit={() => login(userInfo.name, userInfo.password)}>
                    <FormControl className={classes.margin}>
                        <TextField
                            label='Имя пользователя' 
                            onChange={handleChange}
                            required={true}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>    
                        <TextField
                            label='Пароль' 
                            onChange={handleChange}
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
    userInfo: PropTypes.shape({
        name: PropTypes.string,
        password: PropTypes.string,
    }).isRequired,
    setIsNotRegistred: PropTypes.func,
    handleChange: PropTypes.func,
}

export default Login;
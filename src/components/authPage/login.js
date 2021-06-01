import React from "react";
import {
  Container,
  Typography,
  FormControl,
  TextField,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postLoginRequest } from "../../modules/actions";

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "100%",
    margin: "8px 0",
  },
  form: {
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 110px",
  },
  button: {
    marginTop: "70px",
    borderRadius: "30px",
    fontSize: "1.3rem",
    fontWeight: "400",
  },
  h4: {
    fontSize: "1.7rem",
    marginBottom: "2.5rem",
    fontWeight: "700",
  },
  adiitinText: {
    fontSize: "1rem",
    fontWeight: "400",
  },
  loader: {},
}));

function Login(props) {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    props.postLoginRequest({ email: email, password: password });
  };
  return (
    <Container>
      <Container className={classes.container}>
        <Typography data-testid='login-header' className={classes.h4} variant='h4'>
          Вход
        </Typography>

        <form data-testid='form' className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <FormControl className={classes.margin}>
            <TextField
              error={props.authReducer.error ? true : false}
              name='email'
              label={props.authReducer.error ? props.authReducer.error : "Имя пользователя"}
              required={true}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField
              error={props.authReducer.error ? true : false}
              name='password'
              label='Пароль'
              required={true}
              type='password'
            />
            {props.authReducer.isLoading && <LinearProgress color='primary' />}
            <Button
              disabled={props.isLoading && true}
              className={classes.button}
              variant='contained'
              color='primary'
              type='submit'>
              Войти
            </Button>
          </FormControl>
        </form>
      </Container>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Typography>
          Новый пользователь?
          <Link style={{ marginLeft: "5px" }} to='/auth/registr'>
            Зарегистрируйтесь
          </Link>
        </Typography>
      </div>
    </Container>
  );
}

Login.propTypes = {
  setIsNotRegistred: PropTypes.func,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { postLoginRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Login);

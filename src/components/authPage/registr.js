import React from "react";
import { Container, Typography, FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postRegRequest } from "../../modules/actions";

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
}));

function Registr(props) {
  const classes = useStyles();

  const handleRegistr = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const password = e.target.password.value;
    props.postRegRequest({ email: email, password: password, name: name, surname: surname });
  };

  return (
    <Container>
      <Container className={classes.container}>
        <Typography className={classes.h4} variant='h4'>
          Регистрация
        </Typography>
        <form className={classes.form} onSubmit={(e) => handleRegistr(e)}>
          <FormControl className={classes.margin}>
            <TextField name='email' label='Email' required={true} />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField name='name' label='Как вас зовут?' required={true} />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField name='surname' label='Ваша фамилия?' required={true} />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField name='password' label='Придумайте пароль' required={true} />
            <Button className={classes.button} variant='contained' color='primary' type='submit'>
              Регистрация
            </Button>
          </FormControl>
        </form>
      </Container>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Typography>
          Уже есть аккаунт?
          <Link style={{ marginLeft: "5px" }} to='/auth'>
            Войти
          </Link>
        </Typography>
      </div>
    </Container>
  );
}

Registr.propTypes = {
  setIsNotRegistred: PropTypes.func,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { postRegRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Registr);

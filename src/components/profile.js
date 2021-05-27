import React, { useState } from "react";
import Header from "./common/header";
import PropTypes from "prop-types";
import { Container, Paper, Typography, FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MCIcon, Logo } from "loft-taxi-mui-theme";
import { connect } from "react-redux";
import { postCardInfo } from "../modules/actions";

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "100%",
    margin: "8px 0",
    padding: "5px",
  },
  profileBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "20px",
  },
  profilePaper: {
    padding: "50px 15px",
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "400",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    height: "200px",
    padding: "10px",
    justifyContent: "space-between",
  },
  cardNumber: {
    textAlign: "left",
    fontSize: "26px",
    fontWeight: "400",
  },
  MCIcon: {},
  mcContaner: {
    textAlign: "right",
  },
}));

function TaxiProfile(props) {
  const classes = useStyles();
  const [cardNumber, setCardNumber] = useState();
  const [cardDate, setCardDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const cardNumber = e.target.cardNumber.value;
    const cvc = e.target.cvc.value;
    const date = e.target.date.value;
    props.postCardInfo({
      cardNumber: cardNumber,
      expiryDate: date,
      CardName: name,
      cvc: cvc,
      token: props.authReducer.token,
    });
  };
  return (
    <div data-testid='profile-container'>
      <Header />
      <div data-testid='profile-page' style={{ textAlign: "center", paddingTop: "150px" }}>
        <Container>
          <Paper className={classes.profilePaper}>
            <Typography variant='h4'>Профиль</Typography>
            <Typography>Введите платежные данные</Typography>
            <Container className={classes.profileBox}>
              <form id='profile-form' onSubmit={(e) => handleSubmit(e)}>
                <FormControl className={classes.margin}>
                  <TextField name='name' label='Имя владельца' required={true} />
                </FormControl>
                <FormControl className={classes.margin}>
                  <TextField
                    name='cardNumber'
                    label='Номер карты'
                    required={true}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </FormControl>
                <div className={classes.flexBox}>
                  <FormControl className={classes.margin}>
                    <TextField
                      name='date'
                      required={true}
                      label='Date'
                      onChange={(e) => setCardDate(e.target.value)}
                    />
                  </FormControl>
                  <FormControl className={classes.margin}>
                    <TextField name='cvc' label='CVC' required={true} />
                  </FormControl>
                </div>
              </form>

              <Paper elevation={3} className={classes.card}>
                <div className={classes.flexBox}>
                  <Logo></Logo>
                  <p>{cardDate}</p>
                </div>

                <div className={classes.cardNumber}>
                  <p style={{ margin: "0" }}>{cardNumber}</p>
                </div>
                <div className={classes.mcContaner}>
                  <MCIcon className={classes.MCIcon} />
                </div>
              </Paper>
            </Container>
            <Button form='profile-form' variant='contained' color='primary' type='submit'>
              Сохранить
            </Button>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

TaxiProfile.propTypes = {
  goToPage: PropTypes.func,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { postCardInfo };

export default connect(mapStateToProps, mapDispatchToProps)(TaxiProfile);

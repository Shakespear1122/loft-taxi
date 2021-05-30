import React, { useEffect, useState } from "react";
import Header from "./common/header";
import PropTypes from "prop-types";
import { Container, Paper, Typography, FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MCIcon, Logo } from "loft-taxi-mui-theme";
import { connect } from "react-redux";
import { postCardInfo } from "../modules/actions";
import NumberFormat from "react-number-format";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";

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
    margin: "40px 0",
  },
  profilePaper: {
    padding: "70px 20px",
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

function CardNumber(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.formattedValue,
          },
        });
      }}
      format='#### #### #### ####'
    />
  );
}

function CardCvc(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format='###'
      placeholder='CVC'
    />
  );
}

function TaxiProfile(props) {
  const classes = useStyles();
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (
      localStorage.getItem("loft-taxi-state") &&
      JSON.parse(localStorage.getItem("loft-taxi-state")).token
    ) {
      axios
        .get(
          `https://loft-taxi.glitch.me/card?token=${
            JSON.parse(localStorage.getItem("loft-taxi-state")).token
          }`
        ) 
        .then((response) => {
          const cardData = response.data;
          setCardNumber(cardData.cardNumber);
          setCardName(cardData.cardName);
          setCardCvc(cardData.cvc);
          setCardDate(cardData.expiryDate);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const cardNumber = e.target.cardNumber.value;
    const cvc = e.target.cvc.value;
    const date = e.target.date.value;
    props.postCardInfo({
      cardNumber: cardNumber,
      expiryDate: date,
      cardName: name,
      cvc: cvc,
      token: props.authReducer.token,
    });
  };

  const dateChanger = () => {
    let month = selectedDate.getMonth() + 1;
    month = month < 9 ? "0" + month : month;
    let year = selectedDate.getFullYear().toString().slice(2);
    let date = month + "/" + year;
    return date;
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
                  <TextField value={cardName} name='name' label='Имя владельца' required={true} />
                </FormControl>
                <FormControl className={classes.margin}>
                  <TextField
                    name='cardNumber'
                    label='Номер карты'
                    required={true}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    InputProps={{
                      inputComponent: CardNumber,
                    }}
                  />
                </FormControl>
                <div className={classes.flexBox}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <FormControl className={classes.margin}>
                      <DatePicker
                        name='date'
                        disableFuture
                        openTo='year'
                        format='MM/yy'
                        views={["year", "month"]}
                        value={selectedDate}
                        onChange={setSelectedDate}
                      />
                    </FormControl>
                  </MuiPickersUtilsProvider>
                  <FormControl className={classes.margin}>
                    <TextField
                      name='cvc'
                      value={cardCvc}
                      required={true}
                      InputProps={{
                        inputComponent: CardCvc,
                      }}
                    />
                  </FormControl>
                </div>
              </form>

              <Paper elevation={3} className={classes.card}>
                <div className={classes.flexBox}>
                  <Logo></Logo>
                  <p>{dateChanger()}</p>
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

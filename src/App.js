import React, { useEffect } from "react";
import AuthPage from "./components/authPage";
import TaxiProfile from "./components/profile";
import TaxiMap from "./components/map";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { connect } from "react-redux";
import axios from "axios";
import { setCardInfo } from "./modules/actions";

function App(props) {
  const { setCardInfo } = props;
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
          setCardInfo(cardData);
          localStorage.setItem("cardData", JSON.stringify(cardData));
        });
    }
  }, []);

  return (
    <div data-testid='home-container'>
      <Switch>
        <PrivateRoute
          path='/order/map'
          isLoggedIn={props.authReducer.isLoggedIn}
          component={TaxiMap}
        />
        <PrivateRoute
          path='/order/profile'
          isLoggedIn={props.authReducer.isLoggedIn}
          component={TaxiProfile}
        />
        <Route path='/auth' component={AuthPage} />
        <Redirect to='/auth' />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = { setCardInfo };

export default connect(mapStateToProps, mapDispatchToProps)(App);

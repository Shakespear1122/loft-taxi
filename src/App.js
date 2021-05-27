import React from "react";
import AuthPage from "./components/authPage";
import TaxiProfile from "./components/profile";
import TaxiMap from "./components/map";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { connect } from "react-redux";

function App(props) {
  return (
    <div data-testid='home-container'>
      <Switch>
        <PrivateRoute path='/order/map' isLoggedIn={props.isLoggedIn} component={TaxiMap} />
        <PrivateRoute path='/order/profile' isLoggedIn={props.isLoggedIn} component={TaxiProfile} />
        <Route path='/auth' component={AuthPage} />
        <Redirect to='/auth' />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);

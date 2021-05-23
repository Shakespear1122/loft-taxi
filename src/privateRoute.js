import React from "react";
import { Route, Redirect } from "react-router-dom";

export let PrivateRoute = ({ component: RouteComponent, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(routeProps) => (isLoggedIn ? <RouteComponent {...routeProps} /> : <Redirect to='/' />)}
  />
);

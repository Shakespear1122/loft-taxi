import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../modules/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
  },
  logo: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  const link = {
    textDecoration: "none",
    color: "#fff",
    marginRight: "15px",
  };

  return (
    <div data-testid='header-container' className={classes.root}>
      <AppBar className={classes.root}>
        <Toolbar>
          <div className={classes.logo}>
            <Logo />
          </div>
          <Link style={link} to='/order/map' data-testid='map'>
            Карта
          </Link>
          <Link style={link} to='/order/profile' data-testid='profile'>
            Профиль
          </Link>
          <Button
            data-testid='exit-button'
            style={{ color: "#fff" }}
            onClick={() => props.logOut()}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  goToPage: PropTypes.func,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Header);

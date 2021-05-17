import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AuthContext} from './authContext';


ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme} >
        <CssBaseline />
        <AuthContext>
          <App />
        </AuthContext>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

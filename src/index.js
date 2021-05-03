import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme} >
        <App /> 
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import './styles/index.css';
import App from './App';

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById("index"));

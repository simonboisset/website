import React from 'react';
import {Link} from "react-router-dom";
import {Div} from "src/components";
import {AppBar,Typography,Icon,IconButton,Toolbar} from '@material-ui/core';
class Header extends React.Component {
  render() {
    return (
      <AppBar elevation={0} position="static">
      <Div>        
        <h1 className="gloria">Simon Boisset</h1>
        <h3 className="gloria">Développeur node react</h3>
      </Div>
      </AppBar>
    );
  }
}
export default Header;

import React from 'react';
import { withStore } from 'Store';
import database from 'database';
import { Button, Grid, List, ListItem, Avatar, ListItemIcon, ListItemText } from '@material-ui/core'
export default withStore(function (props: any) {
  return (
    <React.Fragment>
      <Grid item >
        Messages
        <Button onClick={() => database.logout()}>Logout</Button>
      </Grid>
      <Grid item >
        <List>
          
          <ListItem button>
            <ListItemIcon>
              <Avatar>S</Avatar>
            </ListItemIcon>
            <ListItemText primary="Last message" />
          </ListItem></List>
      </Grid>
    </React.Fragment>
  );
})
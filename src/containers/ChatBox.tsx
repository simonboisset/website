import React from 'react';
import { withStore } from 'Store';
import database from 'database';
import { Button, Grid } from '@material-ui/core'
export default withStore(function(props:any){
  return (
    <React.Fragment>
      <Grid item >
        Conversation
        <Button onClick={() => database.logout()}>Logout</Button>
      </Grid>
      <Grid item >
        Conversation
        <Button onClick={() => database.logout()}>Logout</Button>
      </Grid>
    </React.Fragment>
  );
})
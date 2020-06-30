import React from 'react';
import { withStore } from '../Store';
import database from '../database';
import { IconButton,Icon, Grid, List, ListItem, Avatar, ListItemIcon, ListItemText } from '@material-ui/core'
import ChatBox from "./ChatBox";
export default withStore(function (props: any) {
  const [user, setUser] = React.useState<any>(null);
  return (
    <React.Fragment>
      {user ? <ChatBox user={user} admin /> :
        <Grid item >

          <List>
            {props.users.map((usr: any, index: any) =>
              <ListItem key={index} button onClick={() => setUser(usr)}>
                <ListItemIcon>
                  <Avatar>{usr.name[0]}</Avatar>
                </ListItemIcon>
                <ListItemText primary={usr.name} secondary={usr.messages[usr.messages.length - 1].text} />
              </ListItem>)}
          </List>
        </Grid>}
      <Grid item >
        {user?<IconButton onClick={() => setUser(null)}><Icon>arrow_back</Icon></IconButton>:null}
        <IconButton onClick={() => database.logout()}><Icon>logout</Icon></IconButton>
      </Grid>
    </React.Fragment>
  );
})
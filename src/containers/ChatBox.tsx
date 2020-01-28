import React from 'react';
import { withStore } from 'Store';
import database from 'database';
import Message from "components/Message";
import {  Grid, TextField,Icon,IconButton } from '@material-ui/core'
export default withStore(function (props: any) {
  const [text, setText] = React.useState("");
  function sendMessage(event: React.FormEvent) {
    database.sendMessage(props.user.id, text, props.admin)
    setText("");
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <Grid item >
        <form onSubmit={sendMessage}><TextField value={text} fullWidth variant="outlined" onChange={(e) => setText(e.target.value)} /></form>
      </Grid>
      <Grid item >
        {props.user.messages.map((message: any, index: number) => <Message key={index} message={message}
          left={(props.admin && !message.writer) || (!props.admin && message.writer)}
          name={message.writer ? props.user.name : "Simon"}
          sameTop={props.user.messages[index - 1] ? message.writer === props.user.messages[index - 1].writer : false}
          sameBottom={props.user.messages[index + 1] ? message.writer === props.user.messages[index + 1].writer : false} />)}

      </Grid>
      {!props.admin ? <Grid item >
        <IconButton onClick={() => database.logout()}><Icon>logout</Icon></IconButton>
      </Grid> : null}
    </React.Fragment>
  );
})
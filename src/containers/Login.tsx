import React from 'react';
import database from 'database';
import { Button, TextField, ButtonGroup, Collapse, Grid } from '@material-ui/core'

import { withStore } from "Store";

export default withStore(function () {
    const [email, setEmail] = React.useState("");
    const [email2, setEmail2] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [name, setName] = React.useState("");
    const [open, setOpen] = React.useState(false);
    function signin(event: React.FormEvent) {
        if (email === email2 && password === password2 && email.length > 2 && password.length > 6) {
            database.signin(email, password, name);
        }
        event.preventDefault();
    }
    function login(event: React.FormEvent) {
        database.login(email, password);
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <Grid item >
                <ButtonGroup>
                    <Button color="primary" variant={open ? "outlined" : "contained"} onClick={() => setOpen(false)}>Login</Button>
                    <Button color="primary" variant={open ? "contained" : "outlined"} onClick={() => setOpen(true)}>Signin</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={open}>
                    <form onSubmit={signin}>
                        <Grid container
                            direction="column"
                            spacing={2}>
                            <Grid item><TextField fullWidth variant="outlined" type="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)} /></Grid>
                            <Grid item><TextField fullWidth variant="outlined" type="email" label="repeat email" value={email2} onChange={(e) => setEmail2(e.target.value)} /></Grid>
                            <Grid item><TextField fullWidth variant="outlined" label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></Grid>
                            <Grid item><TextField fullWidth variant="outlined" label="repeat password" type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} /></Grid>
                            <Grid item><TextField fullWidth variant="outlined" label="name" value={name} onChange={(e) => setName(e.target.value)} /></Grid>
                            <Grid item><Button fullWidth color="primary" variant="contained" type="submit">Signin</Button></Grid>
                        </Grid>
                    </form>
                </Collapse>
                <Collapse in={!open} >
                    <form onSubmit={login}>
                        <Grid container
                            direction="column"
                            spacing={2}>
                            <Grid item><TextField fullWidth variant="outlined" type="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)} /></Grid>
                            <Grid item><TextField fullWidth variant="outlined" label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></Grid>
                            <Grid item><Button fullWidth color="primary" variant="contained" type="submit">Login</Button></Grid>
                        </Grid>
                    </form>
                </Collapse>
            </Grid>
        </React.Fragment>
    );
})


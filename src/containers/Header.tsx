import React from 'react';
import { withStore } from '../Store';
import Flex from '../components/Flex';
import { Icon, Typography, IconButton, Button, Snackbar } from '@material-ui/core';
export default withStore(function Header({setOpenDrawer}:any) {

    const [openSnackPhone, setOpenSnackPhone] = React.useState(false);
    const [openSnackMail, setOpenSnackMail] = React.useState(false);

    function scrollTo(id: string) {
        let element = document.getElementById(id);
        if (element !== null) {
            window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
        }
    }
    function copy(message: string, setState: any) {
        navigator.clipboard.writeText(message);
        setState(true);
    };
    return (
        <Flex style={{ zIndex: 1000 }} position="fixed" color="white" width="100%" minHeight="70px" backgroundColor="#607d8b" direction="row" justify="space-between">
            <Flex margin="0 20px 0 20px" direction="row" gap="20px">
                <IconButton onClick={() => scrollTo("presentation")} color="inherit"><Icon>keyboard_arrow_up</Icon></IconButton>
                <Typography variant="h6">Simon Boisset</Typography>
            </Flex>
            <Flex margin="0 20px 0 20px" direction="row" gap="20px">
                <Button onClick={() => scrollTo("presentation")} color="inherit">Présentation</Button>
                <Button onClick={() => scrollTo("parcours")} color="inherit">Mon parcours</Button>
                <Button onClick={() => scrollTo("realisations")} color="inherit">Mes réalisations</Button>
                <IconButton onClick={() => copy("0699484656", setOpenSnackPhone)} color="inherit"><Icon>phone</Icon></IconButton>
                <IconButton onClick={() => copy("simon.boisset@gmail.com", setOpenSnackMail)} color="inherit"><Icon>mail</Icon></IconButton>
                <IconButton onClick={() => setOpenDrawer(true)} color="inherit"><Icon>question_answer</Icon></IconButton>
                {/* <IconButton color="inherit">
                    <Badge variant="dot" color="secondary"><Icon>chat</Icon></Badge>
                </IconButton> */}
            </Flex>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSnackPhone}
                autoHideDuration={2000}
                onClose={() => setOpenSnackPhone(false)}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message="Numéro de téléphone copié !"
                action={[
                    <Button key="undo" color="secondary" size="small" onClick={() => setOpenSnackPhone(false)}>
                        Close
                    </Button>,
                ]}
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSnackMail}
                autoHideDuration={2000}
                onClose={() => setOpenSnackMail(false)}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message="Adresse mail copiée !"
                action={[
                    <Button key="undo" color="secondary" size="small" onClick={() => setOpenSnackMail(false)}>
                        Close
                    </Button>,
                ]}
            />
        </Flex>
    );
})
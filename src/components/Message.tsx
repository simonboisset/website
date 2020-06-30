import React from 'react';
import { Avatar, Badge } from '@material-ui/core';
import { withStore } from "../Store";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: any) => ({
    containerLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    containerRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    badge: (props: any) => ({
        maxWidth: "80%",
        marginTop: props.sameTop ? theme.spacing(0) : theme.spacing(1),
        marginBottom: "2px",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }),
    paper: (props: any) => ({
        width: "100%",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        backgroundColor: props.left ? theme.palette.primary.dark : theme.palette.primary.light,
        color: "white",
        borderTopLeftRadius: props.left && props.sameTop ? "3px" : theme.spacing(2),
        borderBottomLeftRadius: props.left && props.sameBottom ? "3px" : theme.spacing(2),
        borderTopRightRadius: !props.left && props.sameTop ? "3px" : theme.spacing(2),
        borderBottomRightRadius: !props.left && props.sameBottom ? "3px" : theme.spacing(2),
    })
}));
export default withStore(function ({ left, message,  sameTop, sameBottom ,name }: any) {

    const refContainer = React.useRef<any>(null);
    const classes = useStyles({ left, sameTop, sameBottom });
React.useEffect(() => {
    refContainer.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, [])
return (
    <div className={left ? classes.containerLeft : classes.containerRight}>
        <Badge ref={refContainer}
            className={classes.badge}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: left ? "left" : "right"
            }}
            invisible={sameBottom}
            badgeContent={<Avatar className={classes.small}>{name[0]}</Avatar>}>
            <div className={classes.paper}>{message.text}</div>
        </Badge>
    </div>
);
})
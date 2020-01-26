import React from 'react';
import { withStore } from 'Store';
import { Drawer ,Button} from '@material-ui/core';
export default withStore(function ({ openDrawer, setOpenDrawer }: any) {
    const [auth, setAuth] = React.useState(false);
    
    return (
        <Drawer
            onClose={() => setOpenDrawer(false)}
            anchor="right"
            open={openDrawer}>
                {auth?<Button>Message</Button>:<Button>Login</Button>}
            
        </Drawer>
    );
})
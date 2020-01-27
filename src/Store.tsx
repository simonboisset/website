import React from "react";

import database from 'database';
const Store = React.createContext({});

export default function (props: { children: React.ReactNode }) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [activeUser, setActiveUser] = React.useState<any>(null);
    React.useEffect(() => {
        database.init();
        database.onAuth((user) => {
            if (user) {
                setActiveUser(user)
            }
            else {
                setActiveUser(null)
            }
        })
    }, [])
    return (
        <Store.Provider value={{
            openDrawer, setOpenDrawer, activeUser, setActiveUser
        }}>
            {props.children}
        </Store.Provider>
    );
}
export function withStore<T>(Component: React.ComponentType<T>) {
    return (props: T) => (
        <Store.Consumer>
            {({ ...store }) => <Component {...props} {...store} />}
        </Store.Consumer>
    )
}
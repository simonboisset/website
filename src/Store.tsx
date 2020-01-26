import React from "react";

const Store = React.createContext({});

export default function (props: { children: React.ReactNode }) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    return (
        <Store.Provider value={{
            openDrawer, setOpenDrawer
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
import React from "react";

import database from './database';
const Store = React.createContext({});

export default function (props: { children: React.ReactNode }) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [activeUser, setActiveUser] = React.useState<any>(null);
    const [users, setUsers] = React.useState<any>([]);
    React.useEffect(() => {
        database.init();
        database.onAuth((user) => {
            if (user) {
                setActiveUser(user)
                if (user.admin) {
                    database.watchAllUsers((res) => {
                        res.docChanges().forEach((contact: any) => {
                            if (contact.doc.id !== process.env.REACT_APP_MY_ID) {
                                if (contact.type === "added") {
                                    setUsers((prevState: any) => [...prevState, { ...contact.doc.data(), id: contact.doc.id }])
                                } else if (contact.type === "modified") {
                                    setUsers((prevState: any) => {
                                        let temp = [...prevState];
                                        const id = temp.findIndex(usr => usr.id === contact.doc.id);
                                        temp[id].messages = contact.doc.data().messages;
                                        return temp;
                                    })
                                }
                            }

                        });
                    })
                }
            }
            else {
                setActiveUser(null)
            }
        })
    }, [])
    return (
        <Store.Provider value={{
            openDrawer, setOpenDrawer, activeUser, setActiveUser, users
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
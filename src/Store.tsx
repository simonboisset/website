import React from "react";

import database from 'database';
const Store = React.createContext({});

export default function (props: { children: React.ReactNode }) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [activeUser, setActiveUser] = React.useState<any>(null);
    const [users, setUsers] = React.useState<any[]>([]);
    React.useEffect(() => {
        database.init();
        database.onAuth((user) => {
            if (user) {
                setActiveUser(user)
                if (user.admin) {
                    database.watchAllUsers((res)=>{
                        res.docChanges().forEach((contact:any) => {
                            if (contact.doc.id!=="WecAfOW3FOYbGSKLbDVXVtX1gJA2") {
                                if (contact.type==="added") {
                                    setUsers(prevState=>[...prevState,contact.doc.data()])
                                }else if(contact.type==="modified"){
                                    setUsers(prevState=>[...prevState,contact.doc.data()])
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
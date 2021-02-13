import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

interface IMessage { send: boolean, text: string, date: firebase.firestore.Timestamp }
interface IUser { name: string, id: string, messages: IMessage[], admin: boolean, verified: boolean }



export default {
  init() {
    const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_POJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MASSAGING_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };
    firebase.initializeApp(config);

  },
  onAuth(callback: (user: IUser | null) => void) {
    firebase.auth().onAuthStateChanged(res => {
      if (res) {
        if (res.emailVerified) {
          if (res.uid === process.env.REACT_APP_MY_ID) {
            callback({ id: res.uid, name: "", messages: [], admin: true, verified: true })
          } else {
            this.watchUserById(res.uid, (user: IUser) => callback({ ...user, admin: false, verified: true, id: res.uid }));
          }
        } else {
          callback({ id: "", name: "", messages: [], admin: false, verified: false })
        }
      }
      else callback(null);
    });
  },
  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signin(email: string, password: string, name: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(data => {
        if (data.user) {
          const user = { name, messages: [] };
          data.user.sendEmailVerification();
          data.user.updateProfile({ displayName: name });
          firebase.firestore().collection("users")
            .doc(data.user.uid).set(user);
        }
      })
  },
  logout() {
    firebase.auth().signOut();
  },
  watchUserById(id: string, onChange: (user: IUser) => void) {
    firebase.firestore().collection("users").doc(id)
      .onSnapshot((user) => onChange({ id, name: "", messages: [], ...user.data(), admin: false, verified: false }))
  },
  sendMessage(id: string, message: string, admin: boolean) {

    firebase.firestore().collection("users").doc(id).update({
      messages: firebase.firestore.FieldValue.arrayUnion({ text: message, date: firebase.firestore.Timestamp.now(), writer: !admin })
    })
  },
  watchAllUsers(callback: (users: any) => void) {
    firebase.firestore().collection("users").onSnapshot((users) => callback(users))
  }
};

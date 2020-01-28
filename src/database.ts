import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

interface IMessage { send: boolean, text: string, date: firebase.firestore.Timestamp }
interface IUser { name: string, id: string, messages: IMessage[], admin: boolean, verified: boolean }

export default {
  init() {
    const config = {
      apiKey: "AIzaSyDtXwANhoKvyxaMA7kLEW9Xf-v5LI-BWiE",
      authDomain: "simon-boisset.firebaseapp.com",
      databaseURL: "https://simon-boisset.firebaseio.com",
      projectId: "simon-boisset",
      storageBucket: "simon-boisset.appspot.com",
      messagingSenderId: "371411269068",
      appId: "1:371411269068:web:98f7cd35ba8d6714231969",
      measurementId: "G-7B80QQVQ5S"
    };
    firebase.initializeApp(config);

  },
  onAuth(callback: (user: IUser | null) => void) {
    firebase.auth().onAuthStateChanged(res => {
      if (res) {
        if (res.emailVerified) {
          if (res.uid === "WecAfOW3FOYbGSKLbDVXVtX1gJA2") {
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

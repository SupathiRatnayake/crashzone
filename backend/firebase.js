// configure information to connect with Firebase project
// and export Firebase Database service
import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu3NIlIWwFGVjLmRiAcDg_TDcY6LHmn8o",
  authDomain: "crash-zone.firebaseapp.com",
  databaseURL: "https://crash-zone-default-rtdb.firebaseio.com",
  projectId: "crash-zone",
  storageBucket: "crash-zone.appspot.com",
  messagingSenderId: "640877651725",
  appId: "1:640877651725:web:c6a8d2707efc184db93244"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();

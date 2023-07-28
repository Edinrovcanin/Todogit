import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHRvM8F8iw2WnnBWUKnuR0nVzmwvEFNhk",
    authDomain: "mail-a3c7f.firebaseapp.com",
    databaseURL: "https://mail-a3c7f-default-rtdb.firebaseio.com",
    projectId: "mail-a3c7f",
    storageBucket: "mail-a3c7f.appspot.com",
    messagingSenderId: "850843968390",
    appId: "1:850843968390:web:87657462b8f658b2490207",
    measurementId: "G-1YDR7MSD8X"
}
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
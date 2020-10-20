import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwnkkZLIbOGZ-AX7Be_v5vnqhHRfzZZng",
    authDomain: "discord-clone-9611a.firebaseapp.com",
    databaseURL: "https://discord-clone-9611a.firebaseio.com",
    projectId: "discord-clone-9611a",
    storageBucket: "discord-clone-9611a.appspot.com",
    messagingSenderId: "372756484014",
    appId: "1:372756484014:web:f74afcce3883b73e61023f",
    measurementId: "G-JESB9ETLSC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

export default db
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCatrnHiwIy71TMp-7VCivY0jevLa5DGag",
    authDomain: "clone-edbca.firebaseapp.com",
    projectId: "clone-edbca",
    storageBucket: "clone-edbca.appspot.com",
    messagingSenderId: "1060156662934",
    appId: "1:1060156662934:web:f15095e03b436790b74eb7",
    measurementId: "G-BWF53Z0L88"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
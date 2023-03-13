import firebase from 'firebase/compat/app'
import'firebase/compat/auth'
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLpNpVnFCyMVQmIbJOv9nnyzfUx9-Chfo",
    authDomain: "fir-64784.firebaseapp.com",
    projectId: "fir-64784",
    storageBucket: "fir-64784.appspot.com",
    messagingSenderId: "705096380265",
    appId: "1:705096380265:web:126e407fdf4aa76a1217f8",
    measurementId: "G-434YW88JGJ"
  };

  export const Firebase=firebase.initializeApp(firebaseConfig)
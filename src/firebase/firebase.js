import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDXhoGclq4MZ_Z3W5OZSH-q_1zTRmIhr4A",
  authDomain: "guajolotas-17a57.firebaseapp.com",
  projectId: "guajolotas-17a57",
  storageBucket: "guajolotas-17a57.appspot.com",
  messagingSenderId: "651887544688",
  appId: "1:651887544688:web:b55e242cc88e94433be7b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()
const google = new GoogleAuthProvider()

export {
    app,
    db,
    google,
    auth
}
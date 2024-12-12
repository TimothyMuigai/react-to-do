// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNaJV3pYwGR2dfNtYxqO_SABeaoXoukds",
  authDomain: "to-do-auth-b5d45.firebaseapp.com",
  projectId: "to-do-auth-b5d45",
  storageBucket: "to-do-auth-b5d45.firebasestorage.app",
  messagingSenderId: "884868688506",
  appId: "1:884868688506:web:643c2c1c719df18c5ae9c3",
  measurementId: "G-94FXFMMTNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
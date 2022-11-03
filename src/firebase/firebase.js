// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFSIhFdIeYHwMdEKQauQGjXinNq7_9hEQ",
  authDomain: "taller-recuperacion.firebaseapp.com",
  projectId: "taller-recuperacion",
  storageBucket: "taller-recuperacion.appspot.com",
  messagingSenderId: "1065939437022",
  appId: "1:1065939437022:web:5c0f564142ef6ccb2ac94f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

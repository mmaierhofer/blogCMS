// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSXyojHnLabZA_c-9GfY23jC-rnc0_5qw",
  authDomain: "next-webshop-e618d.firebaseapp.com",
  projectId: "next-webshop-e618d",
  storageBucket: "next-webshop-e618d.appspot.com",
  messagingSenderId: "66976126262",
  appId: "1:66976126262:web:791b7c6fee3844c4c34f97",
  measurementId: "G-0121YKQ3KC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default(firebase);
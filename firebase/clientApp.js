import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: 'AIzaSyBSXyojHnLabZA_c-9GfY23jC-rnc0_5qw',
    authDomain: 'next-webshop-e618d.firebaseapp.com',
    projectId: 'next-webshop-e618d',
    storageBucket: 'next-webshop-e618d.appspot.com',
    messegingSenderId: '66976126262',
    appId: '1:66976126262:web:791b7c6fee3844c4c34f97',
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
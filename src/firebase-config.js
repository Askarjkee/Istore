// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq8YLQG7BiyFVLgsmyZS00-BtvlNKU8-U",
    authDomain: "istore-48532.firebaseapp.com",
    projectId: "istore-48532",
    storageBucket: "istore-48532.appspot.com",
    messagingSenderId: "203766624504",
    appId: "1:203766624504:web:466f20ab81ceeee5c38b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

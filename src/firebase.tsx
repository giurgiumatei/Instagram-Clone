import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDa03VMWSeLIjNeiXgEAMvqiypGxG1hcyU",
    authDomain: "instagram-clone-react-9f4ba.firebaseapp.com",
    projectId: "instagram-clone-react-9f4ba",
    storageBucket: "instagram-clone-react-9f4ba.appspot.com",
    messagingSenderId: "1079245690070",
    appId: "1:1079245690070:web:1e3cc0de4f3e9d2f65e577",
    measurementId: "G-XC6XFJ5FYL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};
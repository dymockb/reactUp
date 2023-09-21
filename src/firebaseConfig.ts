import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";

const config = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

const app = initializeApp(config)
const auth = getAuth(app);

export async function loginUser(username: string, password: string) {
    
    const email = `${username}@arealemail.com`

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        return true
    } catch (error) {
        return false
    }
    
}

export async function registerUser(username: string, password: string) {

    const email = `${username}@arealemail.com`

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}


/*
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";


const config = {
    apiKey: "AIzaSyCmHGNXgpN0ULzo4qEqt_PvpbLIlQKfzFU",
    authDomain: "myapp-fed88.firebaseapp.com",
    projectId: "myapp-fed88",
    storageBucket: "myapp-fed88.appspot.com",
    messagingSenderId: "214178784104",
    appId: "1:214178784104:web:5523b9413a77aa99b82cdd",
    measurementId: "G-FZ0EYVFSB2"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
    const email = `${username}@something.com`
    const auth = firebase.auth()
    try {
        const res = await auth.signInWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
*/
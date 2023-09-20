import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";

const config = {
    apiKey: "AIzaSyCmHGNXgpN0ULzo4qEqt_PvpbLIlQKfzFU",
    authDomain: "myapp-fed88.firebaseapp.com",
    projectId: "myapp-fed88",
    storageBucket: "myapp-fed88.appspot.com",
    messagingSenderId: "214178784104",
    appId: "1:214178784104:web:5523b9413a77aa99b82cdd",
    measurementId: "G-FZ0EYVFSB2"
}

const app = initializeApp(config)
const auth = getAuth(app);

export async function loginUser(username: string, password: string) {
    
    const email = `${username}@arealemail.com`

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    
}

export async function registerUser(username: string, password: string) {

    const email = `${username}@arealemail.com`

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
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
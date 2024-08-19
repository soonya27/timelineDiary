import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCKdaIl4H03Jqzlqvw18DvlARS_ZPJxzlw",
    authDomain: "timelinediary-56539.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: "timelinediary-56539.appspot.com",
    messagingSenderId: "882179305256",
    appId: "1:882179305256:web:176d58155319577018aa1d",
    measurementId: "G-9Y4YTNRK9N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function login() {
    return signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(console.error)
}

export async function logout() {
    return signOut(auth).then(() => null);
}

export async function authUpdate(callback) {
    onAuthStateChanged(auth, (user) => {
        callback(user);
    })
}


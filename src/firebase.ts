// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzGJmWi6Iaywtai_skfwyf-f_yShg-tnM",
    authDomain: "anonymous-12318.firebaseapp.com",
    projectId: "anonymous-12318",
    storageBucket: "anonymous-12318.firebasestorage.app",
    messagingSenderId: "967559900359",
    appId: "1:967559900359:web:7fbba5b122b544a3d8a2e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

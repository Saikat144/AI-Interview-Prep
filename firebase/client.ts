// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsW0BMPvyGs0CqBGcFqUiYL85oZ0OQIpU",
  authDomain: "prepwise2-81f6c.firebaseapp.com",
  projectId: "prepwise2-81f6c",
  storageBucket: "prepwise2-81f6c.firebasestorage.app",
  messagingSenderId: "933534667650",
  appId: "1:933534667650:web:9597108b13f35b6ba4b59b",
  measurementId: "G-LNGG5YGRZK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
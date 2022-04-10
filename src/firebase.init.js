// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJdNzcnn5FV_nxNhDxZ68V84XB33Pozrg",
  authDomain: "ema-john-site-844ad.firebaseapp.com",
  projectId: "ema-john-site-844ad",
  storageBucket: "ema-john-site-844ad.appspot.com",
  messagingSenderId: "9069213542",
  appId: "1:9069213542:web:2e886dd6933fb52b3fbaa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =  getAuth(app)

export default auth;
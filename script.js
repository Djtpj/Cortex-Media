// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBX2hTkfcKsLaBjw1whjCVrdwDaHXoDvUY",
    authDomain: "cortex-media.firebaseapp.com",
    projectId: "cortex-media",
    storageBucket: "cortex-media.appspot.com",
    messagingSenderId: "983216893842",
    appId: "1:983216893842:web:895148909b779bbf119b4b",
    measurementId: "G-NFP632M23F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
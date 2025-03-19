// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPrCZx6yg2snTzfBhn-V_S0znti7VEBWY",
  authDomain: "quickhire-f72f8.firebaseapp.com",
  projectId: "quickhire-f72f8",
  storageBucket: "quickhire-f72f8.firebasestorage.app",
  messagingSenderId: "509107785395",
  appId: "1:509107785395:web:5e5ee2d0de21eadc666ac6",
  measurementId: "G-420LR9CS37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
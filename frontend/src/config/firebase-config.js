// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEEpFCqYaiVbRwy1mh8GfOXTU6Bmy4Otw",
  authDomain: "ternaweb.firebaseapp.com",
  projectId: "ternaweb",
  storageBucket: "ternaweb.appspot.com",
  messagingSenderId: "14178587752",
  appId: "1:14178587752:web:996341214f42a9464957dd",
  measurementId: "G-FQGMWCV12G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
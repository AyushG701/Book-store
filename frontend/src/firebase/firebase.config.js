// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJO4UUMudadoDreIyMYtIXuaB3EtRwAO4",
  authDomain: "mern-book-store-bcb2a.firebaseapp.com",
  projectId: "mern-book-store-bcb2a",
  storageBucket: "mern-book-store-bcb2a.appspot.com",
  messagingSenderId: "295293637725",
  appId: "1:295293637725:web:5b5f98c11bda369225e9b4",
  measurementId: "G-99J054Q14R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;

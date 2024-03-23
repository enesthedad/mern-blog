// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5fddf.firebaseapp.com",
  projectId: "mern-blog-5fddf",
  storageBucket: "mern-blog-5fddf.appspot.com",
  messagingSenderId: "389024284801",
  appId: "1:389024284801:web:d533f1159b33eb07fe0d80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

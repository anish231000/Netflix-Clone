// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA7KZKZmkgKMWw7iolIbics1uLABAjt0Y",
  authDomain: "netflix-a1c0b.firebaseapp.com",
  projectId: "netflix-a1c0b",
  storageBucket: "netflix-a1c0b.appspot.com",
  messagingSenderId: "668073187207",
  appId: "1:668073187207:web:b757874cd42914d3e82522",
  measurementId: "G-T4C8DGL4T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
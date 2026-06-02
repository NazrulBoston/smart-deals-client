// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYmlavr0PkVBiO-hx7r5379HICvw3k-eg",
  authDomain: "smart-deals-f707a.firebaseapp.com",
  projectId: "smart-deals-f707a",
  storageBucket: "smart-deals-f707a.firebasestorage.app",
  messagingSenderId: "1084700870127",
  appId: "1:1084700870127:web:fbaf4fda96217e4a52221a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
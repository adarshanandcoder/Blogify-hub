
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogify-hub.firebaseapp.com",
  projectId: "blogify-hub",
  storageBucket: "blogify-hub.appspot.com",
  messagingSenderId: "376475812954",
  appId: "1:376475812954:web:0f20955dc5a9cedd698463",
  measurementId: "G-L28M3NYFTW"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 
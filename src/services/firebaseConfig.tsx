// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwABJqfQB1pIL0YSqvfvze-etqaUoap78",
  authDomain: "furniro-46c6a.firebaseapp.com",
  projectId: "furniro-46c6a",
  storageBucket: "furniro-46c6a.appspot.com",
  messagingSenderId: "403380042472",
  appId: "1:403380042472:web:b22599c818ce0d2271275d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwABJqfQB1pIL0YSqvfvze-etqaUoap78",
  authDomain: "furniro-46c6a.firebaseapp.com",
  projectId: "furniro-46c6a",
  storageBucket: "furniro-46c6a.appspot.com",
  messagingSenderId: "403380042472",
  appId: "1:403380042472:web:b22599c818ce0d2271275d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
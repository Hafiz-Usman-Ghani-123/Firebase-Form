// this is get started code
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUtz5awB6XDshCTzKUw_PWnc8ePw0pjhw",
  authDomain: "signup-in-form.firebaseapp.com",
  projectId: "signup-in-form",
  storageBucket: "signup-in-form.appspot.com",
  messagingSenderId: "433404649375",
  appId: "1:433404649375:web:3d56e28999bf80a90567aa",
  measurementId: "G-F8YWTX6XH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
};

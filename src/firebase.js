// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJAPkWbBSfdmgLxn06flOqqFUnIjH_Ig4",
  authDomain: "blog-a182f.firebaseapp.com",
  projectId: "blog-a182f",
  storageBucket: "blog-a182f.firebasestorage.app",
  messagingSenderId: "799630764798",
  appId: "1:799630764798:web:d116b20398ad48bc9293af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

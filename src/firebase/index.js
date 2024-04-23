import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig as firebaseConfigInit } from "../config/firebaseInit";

const firebaseConfig = firebaseConfigInit;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const google = new GoogleAuthProvider();

export { auth, database, google };

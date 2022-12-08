// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "techno-club-a230c",
  storageBucket: "techno-club-a230c.appspot.com",
  messagingSenderId: "1022579801370",
  appId: "1:1022579801370:web:a0f3a3d7e50d5fd6bf80a3",
  measurementId: "G-X6GQPHC57V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

db.settings({ timestampsInSnapshots: true });

export default db;

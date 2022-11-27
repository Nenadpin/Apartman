import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: "apartmani-398d9.firebaseapp.com",
  databaseURL:
    "https://apartmani-398d9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "apartmani-398d9",
  storageBucket: "apartmani-398d9.appspot.com",
  messagingSenderId: "401557212160",
  appId: "1:401557212160:web:4a9b8e37bbaa769e70dce5",
  measurementId: "G-4Q70PPYE8T",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

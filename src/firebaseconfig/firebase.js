// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARz9HigcMHduaWPCx8Q7YTqCzcGwmNQkI",
  authDomain: "crud-fireabse-95d4d.firebaseapp.com",
  projectId: "crud-fireabse-95d4d",
  storageBucket: "crud-fireabse-95d4d.appspot.com",
  messagingSenderId: "8244891608",
  appId: "1:8244891608:web:22994aa37d8cc1834fecad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

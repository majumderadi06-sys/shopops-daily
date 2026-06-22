npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzUQ3O3G-ozHV-Wu4TeFLRaFbvqzPXFDA",
  authDomain: "shop-manager-c9b19.firebaseapp.com",
  projectId: "shop-manager-c9b19",
  storageBucket: "shop-manager-c9b19.firebasestorage.app",
  messagingSenderId: "765780872426",
  appId: "1:765780872426:web:98210d4a4d427ca5059b93",
  measurementId: "G-S4R5YHV8ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const messaging = getMessaging(app);

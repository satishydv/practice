
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM13RSQROM5AksdkZwcMCC30mCanjeiwA",
  authDomain: "prepwise-a7385.firebaseapp.com",
  projectId: "prepwise-a7385",
  storageBucket: "prepwise-a7385.firebasestorage.app",
  messagingSenderId: "484238085283",
  appId: "1:484238085283:web:b3bd19e9c93ec50bdd4316",
  measurementId: "G-145BZT9CLF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
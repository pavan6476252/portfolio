// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXtcijSeLxFhcrYo5ijOovFl6V9kIdlOM",
  authDomain: "portfolio-pavan.firebaseapp.com",
  projectId: "portfolio-pavan",
  storageBucket: "portfolio-pavan.appspot.com",
  messagingSenderId: "55167777326",
  appId: "1:55167777326:web:15286c748f743c0ac73dbf",
  measurementId: "G-P7PRD6H454"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
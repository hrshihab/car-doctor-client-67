// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQJ6QkaWrzPQ2NW3nrk9NaRbcuj6O6-BM",
  authDomain: "whiz-car.firebaseapp.com",
  projectId: "whiz-car",
  storageBucket: "whiz-car.appspot.com",
  messagingSenderId: "966893243487",
  appId: "1:966893243487:web:09d26840cbfcfed7b69fea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
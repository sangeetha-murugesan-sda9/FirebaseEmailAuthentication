import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDViiQ_jDnwtFHxJ0bS0wVXGHw0E7toIY4",
  authDomain: "emailpasswordlogin-a9798.firebaseapp.com",
  projectId: "emailpasswordlogin-a9798",
  storageBucket: "emailpasswordlogin-a9798.appspot.com",
  messagingSenderId: "484478944681",
  appId: "1:484478944681:web:ba0d62cfb4f0beb75730b8"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)

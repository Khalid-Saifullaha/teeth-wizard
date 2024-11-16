// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0KURwCY_vW9Y-B-y_vWukJrG2HJHIGRA",
  authDomain: "teeth-wizard.firebaseapp.com",
  projectId: "teeth-wizard",
  storageBucket: "teeth-wizard.firebasestorage.app",
  messagingSenderId: "1069472049688",
  appId: "1:1069472049688:web:0db6252c016125da84316d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

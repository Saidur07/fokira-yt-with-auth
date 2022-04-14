// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8tT9sNDqv2Z0e5IRP03bT7N9D6AHFTkI",
  authDomain: "fokira-yt-clone-with-auth.firebaseapp.com",
  projectId: "fokira-yt-clone-with-auth",
  storageBucket: "fokira-yt-clone-with-auth.appspot.com",
  messagingSenderId: "945663910281",
  appId: "1:945663910281:web:adef8b7082573db4354158",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

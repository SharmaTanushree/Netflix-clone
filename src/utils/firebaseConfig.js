// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmxWS2fbkulUsK8l2WKAXUpXAlH9qrs6s",
  authDomain: "netflix-clone-gpt-4fca1.firebaseapp.com",
  projectId: "netflix-clone-gpt-4fca1",
  storageBucket: "netflix-clone-gpt-4fca1.firebasestorage.app",
  messagingSenderId: "332119785799",
  appId: "1:332119785799:web:b8c4e7e4e596672d8c0c62",
  measurementId: "G-8WXMMKLX1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
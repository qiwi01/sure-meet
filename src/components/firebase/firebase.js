import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyD2Rfv3dGpVccQNNH-RvGH9BHVlLmLLplA",
    authDomain: "sure-meet.firebaseapp.com",
    projectId: "sure-meet",
    storageBucket: "sure-meet.appspot.com",
    messagingSenderId: "700653800587",
    appId: "1:700653800587:web:07e97edae85f83af3cd88e",
    measurementId: "G-GKFP4X950Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  export const db = getFirestore(app)


  export default app;
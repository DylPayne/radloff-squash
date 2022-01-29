import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
//  
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA9IBWYGeeP7r3rBUiguiodRoQuBpGLNs",
  authDomain: "radloff-squash.firebaseapp.com",
  projectId: "radloff-squash",
  storageBucket: "radloff-squash.appspot.com",
  messagingSenderId: "691834446555",
  appId: "1:691834446555:web:325e9c1fa5923daa9522fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

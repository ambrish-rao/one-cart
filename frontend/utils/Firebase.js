import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-8020b.firebaseapp.com",
  projectId: "loginonecart-8020b",
  storageBucket: "loginonecart-8020b.firebasestorage.app",
  messagingSenderId: "66226158610",
  appId: "1:66226158610:web:1b0d0302a83b606cfbaccb"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}


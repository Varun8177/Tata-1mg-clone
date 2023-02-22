
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA-RGsTbUly4ZwgIXmwH7ObNMiQF8yWpzA",
  authDomain: "nextjs-auth-9bb5d.firebaseapp.com",
  projectId: "nextjs-auth-9bb5d",
  storageBucket: "nextjs-auth-9bb5d.appspot.com",
  messagingSenderId: "234014689110",
  appId: "1:234014689110:web:80984dc2875fa77d5d78f7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
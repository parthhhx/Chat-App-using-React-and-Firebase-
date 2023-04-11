import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvUaiwUeWIxrb94ZTM82Lq3KRqRgQrWuA",
  authDomain: "cs359-project-ef5b0.firebaseapp.com",
  projectId: "cs359-project-ef5b0",
  storageBucket: "cs359-project-ef5b0.appspot.com",
  messagingSenderId: "171272671958",
  appId: "1:171272671958:web:dbf35cc6208919d04b6f77",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

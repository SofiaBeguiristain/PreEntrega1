import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8ngQ-TqhMT0m8i6emYYKfY0GeedqkMsY",
  authDomain: "backeco-b0c2f.firebaseapp.com",
  projectId: "backeco-b0c2f",
  storageBucket: "backeco-b0c2f.firebasestorage.app",
  messagingSenderId: "939542761522",
  appId: "1:939542761522:web:a24a7d8baac8527475ec2b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

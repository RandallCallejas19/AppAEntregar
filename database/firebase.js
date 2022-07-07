import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-K_T6YRikhgN13dtghVDRHFqOWzzOnJo",
  authDomain: "reactproyect1.firebaseapp.com",
  projectId: "reactproyect1",
  storageBucket: "reactproyect1.appspot.com",
  messagingSenderId: "294218050852",
  appId: "1:294218050852:web:8924fc780340ffe31b97b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
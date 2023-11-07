// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'outhmern-206da.firebaseapp.com',
  projectId: 'outhmern-206da',
  storageBucket: 'outhmern-206da.appspot.com',
  messagingSenderId: '676460809822',
  appId: '1:676460809822:web:a25d295d2103c4c59c6ecf',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

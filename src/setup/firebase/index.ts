// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
const { VITE_FIREBASE_API_KEY } = import.meta.env
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: 'turistriada.firebaseapp.com',
  projectId: 'turistriada',
  storageBucket: 'turistriada.appspot.com',
  messagingSenderId: '575580448164',
  appId: '1:575580448164:web:74c3a16e6ba5df19decd31'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

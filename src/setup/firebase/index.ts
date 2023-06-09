// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const { VITE_FIREBASE_API_KEY } = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: 'turistriada.firebaseapp.com',
  projectId: 'turistriada',
  storageBucket: 'turistriada.appspot.com',
  messagingSenderId: '575580448164',
  appId: '1:575580448164:web:74c3a16e6ba5df19decd31'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirestoreDB = getFirestore(FirebaseApp)
export const FirebaseStorage = getStorage(FirebaseApp)

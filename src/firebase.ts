// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import  { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBuTJsF3G488qQwFnJJl0xpEHcsmgp3vrk',
  authDomain: 'live-chat-6fe60.firebaseapp.com',
  projectId: 'live-chat-6fe60',
  storageBucket: 'live-chat-6fe60.appspot.com',
  messagingSenderId: '330694543792',
  appId: '1:330694543792:web:c2df41e0c63d5cc396ee75',
  measurementId: 'G-1K202B0KYS'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
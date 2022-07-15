import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'


  
const firebaseConfig = {
  apiKey: "AIzaSyCjhx4-_uWhR0dbUlLLNiEbfInQEye9078",
  authDomain: "asramedicalandsurgicalstest.firebaseapp.com",
  projectId: "asramedicalandsurgicalstest",
  storageBucket: "asramedicalandsurgicalstest.appspot.com",
  messagingSenderId: "602416094259",
  appId: "1:602416094259:web:2ebf01a501d5de6c639746",
  measurementId: "G-8159W37XFL"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }


import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import đúng hàm
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPnu5F5eVsiwIOn9LAqHqzjNFuohY-B-Y",
    authDomain: "todosapp-5f45a.firebaseapp.com",
    projectId: "todosapp-5f45a",
    storageBucket: "todosapp-5f45a.appspot.com",
    messagingSenderId: "181382063323",
    appId: "1:181382063323:web:fa1f9df97358558aa598fe",
    measurementId: "G-83YPMG9J7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, signInWithEmailAndPassword, db }; // Export đúng hàm
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyCCSF9cNzhS9lXP51IcKZSZRnUW3OUNEIc",
  authDomain: "test-32c2f.firebaseapp.com",
  projectId: "test-32c2f",
  storageBucket: "test-32c2f.appspot.com",
  messagingSenderId: "726511178449",
  appId: "1:726511178449:web:118297dd4d8b14fa2bebf0",
  measurementId: "G-WMVEN1V1XS"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    
}
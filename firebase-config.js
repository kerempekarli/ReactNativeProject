
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_ocol6YuqvkOu20EGzTbiDNJGwi2A0IA",
  authDomain: "logosgtweek3.firebaseapp.com",
  projectId: "logosgtweek3",
  storageBucket: "logosgtweek3.appspot.com",
  messagingSenderId: "851919877114",
  appId: "1:851919877114:web:63d1f3d1f2b75bf3316a43",
  measurementId: "G-EMDPPC6H46"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireStore = firebase.firestore();
const auth = firebase.auth();

  
export { fireStore, auth };
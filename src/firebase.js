import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsEntGTWn9LBFVVklHHKz5Nxknm0x0-WU",
  authDomain: "slack-clone-2b250.firebaseapp.com",
  projectId: "slack-clone-2b250",
  storageBucket: "slack-clone-2b250.appspot.com",
  messagingSenderId: "595932805059",
  appId: "1:595932805059:web:cf6199f0f0dabb0325af76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQypKCQnOj3Tqc78jwlip90Aq-b29EABQ",
  authDomain: "slack-clone-e8f26.firebaseapp.com",
  projectId: "slack-clone-e8f26",
  storageBucket: "slack-clone-e8f26.appspot.com",
  messagingSenderId: "658654146278",
  appId: "1:658654146278:web:9cc2573d9306f83abdd527",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD19tGwNvwK59t8lfHyKNCyPWUOEDuJqq4",
  authDomain: "whatsapp-nextjs-871e6.firebaseapp.com",
  projectId: "whatsapp-nextjs-871e6",
  storageBucket: "whatsapp-nextjs-871e6.appspot.com",
  messagingSenderId: "168341290321",
  appId: "1:168341290321:web:72e0531c29ded41329a770",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

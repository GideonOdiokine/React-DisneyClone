import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlSzoiXnfo2J82x_XGKxNFxEA_sGPg4-I",
  authDomain: "desneyclone.firebaseapp.com",
  projectId: "desneyclone",
  storageBucket: "desneyclone.appspot.com",
  messagingSenderId: "908485493331",
  appId: "1:908485493331:web:f2ab52bc2e0eada5c53ca6",
  measurementId: "G-G97GSVMWBP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

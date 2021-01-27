// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCN_WpWMgATb4mCbfXQ4d-q3U1ti2PtbXI",
    authDomain: "whatsapp-colne-869b7.firebaseapp.com",
    projectId: "whatsapp-colne-869b7",
    storageBucket: "whatsapp-colne-869b7.appspot.com",
    messagingSenderId: "245299196607",
    appId: "1:245299196607:web:2345db4ca1f696a19ccc0a",
    measurementId: "G-79WDQEE588"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth , provider};
  export default db;
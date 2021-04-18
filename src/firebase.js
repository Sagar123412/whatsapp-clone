import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNHMifhcrVzQd_z0EJfPB_2smr7I2z0qo",
  authDomain: "whatsapp-clone-19d1f.firebaseapp.com",
  projectId: "whatsapp-clone-19d1f",
  storageBucket: "whatsapp-clone-19d1f.appspot.com",
  messagingSenderId: "754405487837",
  appId: "1:754405487837:web:2d3e2a10300564dc771734",
  measurementId: "G-W3B1DVF9GZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "airbnb-clone-app-3d650.firebaseapp.com",
  databaseURL: "https://airbnb-clone-app-3d650-default-rtdb.firebaseio.com",
  projectId: "airbnb-clone-app-3d650",
  storageBucket: "airbnb-clone-app-3d650.appspot.com",
  messagingSenderId: "489878236676",
  appId: "1:489878236676:web:768d1205faf27971164f51",
  measurementId: "G-QBXCFRT92D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

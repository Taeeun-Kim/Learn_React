import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA-viOzmcWuqFOLYF39ts7h-MZLaGknbYg",
  authDomain: "blog-vue-firebase-49f8d.firebaseapp.com",
  projectId: "blog-vue-firebase-49f8d",
  storageBucket: "blog-vue-firebase-49f8d.appspot.com",
  messagingSenderId: "964414795204",
  appId: "1:964414795204:web:5447db33ca264106ea4891",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();

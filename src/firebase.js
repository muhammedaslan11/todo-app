import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export { db };
const firebaseConfig = {
  apiKey: "AIzaSyDgoA_k8aPke7JfAuDJxZ_D_OtvpPiBpNw",
  authDomain: "todo-app-e2d10.firebaseapp.com",
  projectId: "todo-app-e2d10",
  storageBucket: "todo-app-e2d10.appspot.com",
  messagingSenderId: "291674797965",
  appId: "1:291674797965:web:831d21fc46df24cb362fc4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


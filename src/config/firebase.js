import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBBtr12ErtKnPGsffRkNrne_djY4uK7Z14",
  authDomain: "tiktok-jornada-40e59.firebaseapp.com",
  projectId: "tiktok-jornada-40e59",
  storageBucket: "tiktok-jornada-40e59.appspot.com",
  messagingSenderId: "869055270291",
  appId: "1:869055270291:web:534c6d71b1763dd58cac66",
  measurementId: "G-SE6ZBM3HM3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBtr12ErtKnPGsffRkNrne_djY4uK7Z14",
  authDomain: "tiktok-jornada-40e59.firebaseapp.com",
  projectId: "tiktok-jornada-40e59",
  storageBucket: "tiktok-jornada-40e59.appspot.com",
  messagingSenderId: "869055270291",
  appId: "1:869055270291:web:534c6d71b1763dd58cac66",
  measurementId: "G-SE6ZBM3HM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
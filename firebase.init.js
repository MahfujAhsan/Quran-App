
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAZ4FSX0EF4BCmPi8b2qLZODrespYhQ4dM",
    authDomain: "quran-app-5c685.firebaseapp.com",
    projectId: "quran-app-5c685",
    storageBucket: "quran-app-5c685.appspot.com",
    messagingSenderId: "759562129377",
    appId: "1:759562129377:web:1513927146a117aa3d8ca0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
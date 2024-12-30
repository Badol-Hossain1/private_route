
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCOkybA1vdFtdqQ5-UTowdshSPQOGVbKvU",
  authDomain: "privateroute-b0afe.firebaseapp.com",
  projectId: "privateroute-b0afe",
  storageBucket: "privateroute-b0afe.firebasestorage.app",
  messagingSenderId: "756862822587",
  appId: "1:756862822587:web:2a6693ccbe0719bd7ba19e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
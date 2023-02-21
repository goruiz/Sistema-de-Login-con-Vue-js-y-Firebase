import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCHoYm9XtWbwYru1RBq_rJqVHPbMW-pgGo",
  authDomain: "login-724fd.firebaseapp.com",
  projectId: "login-724fd",
  storageBucket: "login-724fd.appspot.com",
  messagingSenderId: "258097440371",
  appId: "1:258097440371:web:38ab59c6f80d8fe1112c06",
  measurementId: "G-CWK1KDQHY9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjlUpsgFJrl8d8BD41VckjFmo1CGuxwDw",
  authDomain: "superchat-hi.firebaseapp.com",
  projectId: "superchat-hi",
  storageBucket: "superchat-hi.firebasestorage.app",
  messagingSenderId: "239422775082",
  appId: "1:239422775082:web:f41659469be99af2378853",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 인증서비스
export const auth = getAuth(app);
// 구글인증 서비스
export const googleAuth = new GoogleAuthProvider();
// 파이어베이스 DB 서비스
export const db = getFirestore(app);

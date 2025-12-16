import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPL_w65JDPFRMJ6ngiHkWMLFe5neymsPY",
  authDomain: "xime-leave-system-3835d.firebaseapp.com",
  projectId: "xime-leave-system-3835d",
  storageBucket: "xime-leave-system-3835d.firebasestorage.app",
  messagingSenderId: "375808256510",
  appId: "1:375808256510:web:f0245d768f631285d6b8af"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

<!-- Put this in ALL HTML files before firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBPL_w65JDPFRMJ6ngiHkWMLFe5neymsPY",
  authDomain: "xime-leave-system-3835d.firebaseapp.com",
  projectId: "xime-leave-system-3835d",
  storageBucket: "xime-leave-system-3835d.firebasestorage.app",
  messagingSenderId: "375808256510",
  appId: "1:375808256510:web:f0245d768f631285d6b8af"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  window.auth = auth;
  window.db = db;
  window.GoogleAuthProvider = GoogleAuthProvider;
  window.signInWithPopup = signInWithPopup;
  window.signOut = signOut;
</script>

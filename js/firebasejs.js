// js/firebaseApp.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Configuración de tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdOgA-h-amWUFd5Yi5G3Zbz6gnGx1dRA",
  authDomain: "pagina-web-estatica-44d09.firebaseapp.com",
  projectId: "pagina-web-estatica-44d09",
  storageBucket: "pagina-web-estatica-44d09.firebasestorage.app",
  messagingSenderId: "414249141743",
  appId: "1:414249141743:web:7139e7122fc7dd47d1a21a",
  measurementId: "G-C9399TY7LD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Registro
export function registrar(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logout() {
  return signOut(auth);
}


// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// Configuración de tu proyecto Firebase
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

// Exportar para poder usarlo en otros archivos
export { app, analytics, auth };

// ===============================
// Importar módulos de Firebase
// ===============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// ===============================
// Configuración de Firebase
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyBdOgA-h-amWUFd5Yi5G3Zbz6gnGx1dRA",
  authDomain: "pagina-web-estatica-44d09.firebaseapp.com",
  projectId: "pagina-web-estatica-44d09",
  storageBucket: "pagina-web-estatica-44d09.firebasestorage.app",
  messagingSenderId: "414249141743",
  appId: "1:414249141743:web:7139e7122fc7dd47d1a21a",
  measurementId: "G-C9399TY7LD"
};

// ===============================
// Inicializar Firebase
// ===============================
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ===============================
// Funciones de autenticación
// ===============================
function registrar(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
  return signOut(auth);
}

// ===============================
// Conectar con botones HTML
// ===============================
document.getElementById('btnRegistro')?.addEventListener('click', () => {
  const email = document.getElementById('emailRegistro').value;
  const password = document.getElementById('passwordRegistro').value;
  registrar(email, password)
    .then(user => alert('Usuario registrado: ' + user.user.email))
    .catch(error => alert(error.message));
});

document.getElementById('btnLogin')?.addEventListener('click', () => {
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('passwordLogin').value;
  login(email, password)
    .then(user => alert('Bienvenido: ' + user.user.email))
    .catch(error => alert(error.message));
});

document.getElementById('btnLogout')?.addEventListener('click', () => {
  logout().then(() => alert('Sesión cerrada'));
});


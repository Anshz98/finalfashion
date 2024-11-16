import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPVj-WRYo4XyqqbCGneEcXHBfUnB_N_SA",
  authDomain: "wardrobewise-2e0bc.firebaseapp.com",
  projectId: "wardrobewise-2e0bc",
  storageBucket: "wardrobewise-2e0bc.firebasestorage.app",
  messagingSenderId: "175504737341",
  appId: "1:175504737341:web:95792c4761f6aad94ed654",
  measurementId: "G-16W41NTH2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication services
export const auth = getAuth(app);

// Export providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com'); // Microsoft Auth Provider

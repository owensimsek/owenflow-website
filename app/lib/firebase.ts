import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0OiJrhfSe_YZBAtQNiXE_gMt0lbTicME",
  authDomain: "owenflow-4c6eb.firebaseapp.com",
  projectId: "owenflow-4c6eb",
  storageBucket: "owenflow-4c6eb.firebasestorage.app",
  messagingSenderId: "177729437810",
  appId: "1:177729437810:web:eaf89a751b3c0b64e5c2eb",
  measurementId: "G-RKKY26ZVXV",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export async function initAnalytics() {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
}

// Firebase 설정 및 초기화
// TODO: 파이어베이스 콘솔(https://console.firebase.google.com/)에서 프로젝트 생성 후 아래 설정을 본인 것으로 교체하세요.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy, serverTimestamp, deleteDoc, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbAibrDCBF-FlsGgCVRGyXlEoAcFgW01c",
  authDomain: "sugar-detective.firebaseapp.com",
  projectId: "sugar-detective",
  storageBucket: "sugar-detective.firebasestorage.app",
  messagingSenderId: "1009993457860",
  appId: "1:1009993457860:web:01948589c37a3f9e95a991",
  measurementId: "G-W45GXWXPX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, onSnapshot, query, orderBy, serverTimestamp, deleteDoc, doc, setDoc, updateDoc };

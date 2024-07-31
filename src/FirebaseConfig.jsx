
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJutGOvsWq8yiAK3CQm9f1-wC1QRMRiRE",
  authDomain: "wslc-260.firebaseapp.com",
  projectId: "wslc-260",
  storageBucket: "wslc-260.appspot.com",
  messagingSenderId: "381741045453",
  appId: "1:381741045453:web:0154d75e28466d393f7b84",
  measurementId: "G-4543507SYT"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
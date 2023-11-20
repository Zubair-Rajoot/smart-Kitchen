import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
  // authDomain: "restaurantapp-c2ed6.firebaseapp.com",
  // databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
  // projectId: "restaurantapp-6f7c1",
  // storageBucket: "restaurantapp-c2ed6.appspot.com",
  // messagingSenderId: "174416156605",
  // appId: "1:498865263516:web:f1e69837fcced4cbc96e59",


  apiKey: "AIzaSyAK7m2Vn7B5ilirxvBFsb2Bi29WEwlqRlI",
  authDomain: "restaurantapp-6f7c1.firebaseapp.com",
  databaseURL: "https://restaurantapp-6f7c1-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-6f7c1",
  storageBucket: "restaurantapp-6f7c1.appspot.com",
  messagingSenderId: "498865263516",
  appId: "1:498865263516:web:f1e69837fcced4cbc96e59"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

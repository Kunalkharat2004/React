import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAYy2XxoEZPCF5bg-CuQQa4EVM9-Wwt8e4",
    authDomain: "react-with-firebase-53972.firebaseapp.com",
    projectId: "react-with-firebase-53972",
    storageBucket: "react-with-firebase-53972.appspot.com",
    messagingSenderId: "990638383119",
    appId: "1:990638383119:web:060f70b528536740f6837a",
    databaseURL:"https://react-with-firebase-53972-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
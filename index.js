  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyBDbZ7EmE5tnUiyh7sudKRlcVa8hu3bQ_0",
    authDomain: "nested-database.firebaseapp.com",
    databaseURL: "https://nested-database-default-rtdb.firebaseio.com",
    projectId: "nested-database",
    storageBucket: "nested-database.appspot.com",
    messagingSenderId: "465097193387",
    appId: "1:465097193387:web:0effb9f0ad334df7e304ee",
    measurementId: "G-ZXSPZ4FEV5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
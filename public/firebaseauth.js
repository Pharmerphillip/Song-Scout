  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB0ZxXlq8KHN1jWOk7Iq5XXyPHGxmsk594",
    authDomain: "songscout-3c222.firebaseapp.com",
    projectId: "songscout-3c222",
    storageBucket: "songscout-3c222.firebasestorage.app",
    messagingSenderId: "318654746581",
    appId: "1:318654746581:web:a54b51cd8b3bdff131775c",
    measurementId: "G-CF8QFV8RNZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
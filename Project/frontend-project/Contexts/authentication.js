import { getAuth, signInAnonymously, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCxVsw7WZaubFR6hOUA50cNzHBwQrkTbKs",
    authDomain: "react-frontend-project-12e3a.firebaseapp.com",
    projectId: "react-frontend-project-12e3a",
    storageBucket: "react-frontend-project-12e3a.appspot.com",
    messagingSenderId: "817616624541",
    appId: "1:817616624541:web:ee5d288701fcd169482d74",
    measurementId: "G-0WZD7B14WN"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const anonymousSignIn = () => {
    signInAnonymously(firebaseAuth)
  .then(() => {
    // Signed in..
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)
  });
}

export const AuthenticationContext = createContext();

export function AuthenticationContextProvider (props) {
  
  return (
      <AuthenticationContext.Provider value={anonymousSignIn}>
          {props.children}
      </AuthenticationContext.Provider>
  )
}
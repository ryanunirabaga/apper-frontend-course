import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

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


export const AuthenticationContext = createContext();

export function AuthenticationContextProvider (props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [route, setRoute] = useState('/')
  const router = useRouter();

  const logRoute = () => {
    setRoute(router.asPath);
  }

  const anonymousSignIn = () => {
    signInAnonymously(firebaseAuth)
    .then(() => {
      // Signed in..
      setIsLoggedIn(true);
      router.push(route);
    })
    .catch((error) => {
      setIsLoggedIn(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`)
    });
  }

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
          setIsLoggedIn(true);
          // console.log(user);
      } else {
          setIsLoggedIn(false);
      }
    });
  },[isLoggedIn])
  
  return (
      <AuthenticationContext.Provider value={{ anonymousSignIn, isLoggedIn, setIsLoggedIn, logRoute, route }}>
          {props.children}
      </AuthenticationContext.Provider>
  )
}
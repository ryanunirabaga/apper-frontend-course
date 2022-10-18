import { getAuth, signInAnonymously, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";

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
          console.log(user);
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
/* 
const emailRegistration = () => {
  createUserWithEmailAndPassword(firebaseAuth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
 */

export const AuthenticationContext = createContext();

export function AuthenticationContextProvider (props) {

  const [fileArray, setFileArray] = ([]);

  function listAllFiles() {
    const storage = getStorage();
  
  // Create a reference under which you want to list
    const listRef = ref(storage, '/');
  
  // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        console.log(res);
        res.prefixes.forEach((folder) => {
          const folderName = folder._location.path_;

          const folderRef = ref(storage,`${folder._location.path_}/`);

          // list all items inside the folder
          listAll(folderRef).then((res) => {
            res.items.forEach((itemRef) => {
              console.log(itemRef);

              const itemPath = itemRef._location.path_;
              const downloadRef = ref(storage, itemPath);

              //get download URL
              getDownloadURL(downloadRef).then((url) => {

                const fileObj = {
                  fileName: itemRef.name,
                  downloadURL: url
                }
                console.log(fileObj);
              });
              // All the items under listRef.
              /* console.log(folderName) */
              /* console.log(); */
              
            });
          });
  
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
  
      }).catch((error) => {
        console.log(`error code: ${error.code} \nerror Message: ${error.message}`);
        // Uh-oh, an error occurred!
      });
  }
  /* listAllFiles(); */
  return (
      <AuthenticationContext.Provider value={anonymousSignIn}>
          {props.children}
      </AuthenticationContext.Provider>
  )
}
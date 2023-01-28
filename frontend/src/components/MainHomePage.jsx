import React from 'react'
import { Navbar } from "./Navbar";
import { CommittesOverview } from "./CommittesOverview";
import { PastYearPaper } from "./PastYearPaper";
import { Events } from './Event/Events';
import { Home } from "./Home";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import "../config/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react';




export const MainHomePage = (props) => {
    
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = async ()=>{

        if(auth.currentUser !== null){
          console.log(auth.currentUser.displayName);
          console.log(auth.currentUser.getIdToken());
        }else{
    
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("current user is " + user.displayName);
            console.log("token is " + token);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        }};

  return (
    <>
    <div>
            <div className="sticky top-0 bg-white z-10">
              <Navbar signInWithGoogle={signInWithGoogle} auth={auth}/>
            </div>

            <Routes>
              <Route exact path="/committesOverview" element={<CommittesOverview setProgress={props.setProgress}/>}/>
              <Route exact path="/" element={<Home setProgress={props.setProgress}/>} />
              <Route exact path="/pastYearPapers" element={<PastYearPaper setProgress={props.setProgress}/>} />
              <Route exact path="/events" element={<Events setProgress={props.setProgress}/>} />
            </Routes>
          </div>
    </>
  )
}
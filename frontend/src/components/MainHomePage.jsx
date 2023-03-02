import React from 'react'
import { Navbar } from "./Navbar";
import { PastYearPaper } from "./PastYearPaper";
import { Events } from './Event/Events';
import { Home } from "./Home";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import "../config/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { CommitteesList } from './Committees/CommitteesList';





export const MainHomePage = (props) => {
    
    const provider = new GoogleAuthProvider();



    const signInWithGoogle = async ()=>{
      console.log('sigin with google run');
      var currentUser =  getAuth().currentUser;
      var auth =  getAuth();
        if(currentUser !== null){
          console.log(currentUser.displayName);
        }else{
        signInWithRedirect(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
            // ...
            // console.log("error code is " + errorCode);
          });
        }};

  return (
    <>
    {/* <button onclick={logou}>log out</button> */}
    <div>
            <div className="sticky top-0 bg-white z-10">
              <Navbar signInWithGoogle={signInWithGoogle}/>
            </div>

            <Routes>
              <Route exact path="/committees" element={<CommitteesList setProgress={props.setProgress}/>}/>
              <Route exact path="/" element={<Home setProgress={props.setProgress}/>} />
              <Route exact path="/pastYearPapers" element={<PastYearPaper setProgress={props.setProgress}/>} />
              <Route exact path="/events" element={<Events setProgress={props.setProgress}/>} />
            </Routes>
          </div>
    </>
  )
}

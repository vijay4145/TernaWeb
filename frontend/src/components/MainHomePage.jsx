import React from 'react'
import { Navbar } from "./Navbar";
import { PastYearPaper } from "./PastYearPapers/PastYearPaper";
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
import '../css/ScrollbarHide.css'





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
    <div className='flex md:flex-row flex-col' style={{backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
            <div className="min-w-fit max-h-fit">
              <Navbar signInWithGoogle={signInWithGoogle}/>
            </div>

            <div className='rounded-3xl w-full bg-white mb-1'> 
              <Home setProgress={props.setProgress}/>
            </div>
          </div>
    </>
  )
}

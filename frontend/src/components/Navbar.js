import React, { useState } from 'react'
import university_icon from "../lottie_animation/university.png";
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { AccountDropDown } from './Navbar/AccountDropDown';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../config/firebase-config";

export const Navbar = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(getAuth(), async(user)=>{
      setCurrentUser(user);
      console.log(user);
    })
  }, [])
  
  // console.log(getAuth());
  

  return (
    <>
        <div className='flex flex-row justify-between' style={{width: '97vw', overflowX: 'hidden'}}>
          <div name="title" className="flex flex-row item-center content-center m-1">
              <img src={university_icon} alt="" />
              <div className="flex flex-col">
                <h1 className="flex content-center items-center text-blue-700 text-3xl">
                  𝑻𝒆𝒓𝒏𝒂
                </h1>
                <h6 className="text-xs text-blue-400">Terna For Students</h6>
              </div>
          </div>

          <ul className='flex flex-row justify-between content-center items-center gap-x-20 z-10'>
            <Link className='nav' to='/'>Home</Link>
            <Link className='nav' to='/events'>Events</Link>
            <Link className='nav' to='/CommittesOverview' >Committees</Link>
            <Link className='nav' to='/pastYearPapers'>Question Papers</Link>
            {
              (currentUser !== null) ? (<AccountDropDown/>)
              :
            <button onClick={props.signInWithGoogle} className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2'>Login</button>
            }
          </ul>

        </div>

    </>
  )
}

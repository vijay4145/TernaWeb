import React, { useState } from 'react'
import university_icon from "../lottie_animation/university.png";
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { AccountDropDown } from './Navbar/AccountDropDown';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../config/firebase-config";
import { useDispatch } from 'react-redux';
import { setUserDetailsSlice } from '../store/UserDetailsSlice';
import { getUserDetails } from '../http';

export const Navbar = (props) => {
  // home, event, committee, past year paper
  const [selectedItem, setSelectedItem] = useState([true, false, false, false]);
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(getAuth(), async(user)=>{
      if(user !== null){
        setCurrentUser(true);
        const userDetail = {
          USER_EMAIL : user.email,
          USER_NAME : user.displayName
        }
        dispatch(setUserDetailsSlice(userDetail));
        const serverResponse = await getUserDetails();
        if(serverResponse.data){
          dispatch(setUserDetailsSlice(serverResponse.data));
        }
      }else setCurrentUser(null);
    })
  }, [])

  const changeSelectedItem = (item_num)=>{
    var temp = [false, false, false, false];
    temp[item_num] = true;
    setSelectedItem(temp);
  }
  
  

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
            <Link className={`nav ${selectedItem[0] ? 'text-blue-600': 'text-gray-500'}`} onClick={()=>{changeSelectedItem(0)}} to='/'>Home</Link>
            <Link className={`nav ${selectedItem[1] ? 'text-blue-600': 'text-gray-500'}`} onClick={()=>{changeSelectedItem(1)}} to='/events'>Events</Link>
            <Link className={`nav ${selectedItem[2] ? 'text-blue-600': 'text-gray-500'}`} onClick={()=>{changeSelectedItem(2)}} to='/committees' >Committees</Link>
            <Link className={`nav ${selectedItem[3] ? 'text-blue-600': 'text-gray-500'}`} onClick={()=>{changeSelectedItem(3)}} to='/pastYearPapers'>Question Papers</Link>
          </ul>
          <div className='flex flex-row justify-between content-center items-center gap-x-20 z-10'>
            {
              (currentUser !== null) ? (<AccountDropDown/>)
              :
            <button onClick={props.signInWithGoogle} className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2'>Login</button>
            }
          </div>



        </div>
          <ul className='nav-mobile-items hidden flex-row justify-between content-center items-center gap-x-10 z-10 max-w-[100vw] overflow-scroll scrollbar-hide px-2 mb-2 shadow-md'>
            <Link className='nav-mobile' to='/'>Home</Link>
            <Link className='nav-mobile' to='/events'>Events</Link>
            <Link className='nav-mobile' to='/committees' >Committees</Link>
            <Link className='nav-mobile' to='/pastYearPapers'>Question Papers</Link>
            {/* <Link className='nav-mobile' to='/my-profile'>My profile</Link> */}
            {/* <Link to='account-settings'>account settings</Link> */}
          </ul>

    </>
  )
}

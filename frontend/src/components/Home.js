import React, { useEffect } from "react";

import '../css/Home.css'
import { AccountDropDown } from "./Navbar/AccountDropDown";
import { EventDetailPage } from './Event/EventDetailPage/EventDetailPage'

import { Home2 } from "./Home/Home2";
import { Route, Routes } from "react-router-dom";
import { CommitteesList } from "./Committees/CommitteesList";
import { PastYearPaper } from "./PastYearPapers/PastYearPaper";
import { Events } from "./Event/Events";
import { setUserDetailsSlice } from "../store/UserDetailsSlice";
import { getUserDetails } from "../http";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddEvent } from './Event/AddEvent'
import { AddCommittee } from './Committees/AddCommittee'

export const Home = (props) => {
  const { USER_NAME } = useSelector(state=> state.UserDetailsSlice);
  const [currentUser, setCurrentUser] = useState(false);
  const [loginButtonStateDisabled, setLoginButtonStateDisabled] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user !== null) {
        setLoginButtonStateDisabled(true);
        setCurrentUser(true);
        const userDetail = {
          USER_EMAIL: user.email,
          USER_NAME: user.displayName,
        };
        dispatch(setUserDetailsSlice(userDetail));
        const serverResponse = await getUserDetails();
        if (serverResponse.data) {
          dispatch(setUserDetailsSlice(serverResponse.data));
        }
      } else {
        setLoginButtonStateDisabled(false);
        setCurrentUser(null);
      }
    });
    props.setProgress(100);
  }, []);

  return (
    <>
    <div className="flex flex-col gap-6 m-6" >
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-blue-500">Welcome {USER_NAME}</h1>
        {/* <AccountDropDown/> */}
          <div className='flex flex-row justify-between content-center items-center gap-x-20 z-10'>
            {
              (currentUser) ? (<AccountDropDown setLoginButtonStateDisabled={setLoginButtonStateDisabled}/>)
              :
              <button disabled={loginButtonStateDisabled} onClick={props.signInWithGoogle} className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2'>Login</button>
            }
            </div>
      </div>



       <div> 
              <Routes>
                <Route exact path="/committees" element={<CommitteesList setProgress={props.setProgress}/>}/>
                <Route exact path="/" element={<Home2  setProgress={props.setProgress}/>} />
                <Route exact path="/pastYearPapers" element={<PastYearPaper  setProgress={props.setProgress}/>} />
                <Route exact path="/events" element={<Events  setProgress={props.setProgress}/>} />
                <Route exact path="/events/add-event" element={<AddEvent setProgress={props.setProgress}/>} />
                <Route exact path="/committees/add-committee" element={<AddCommittee setProgress={props.setProgress}/>} />
                <Route exact path="/events/:id" element={<EventDetailPage setProgress={props.setProgress}/>} />
              </Routes>
        </div>
    </div>
 

    </>
  );
};

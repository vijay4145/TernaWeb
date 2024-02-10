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
import spinner from '../lottie_animation/loader.gif';
import { FaDownload } from "react-icons/fa";
import HalfIconHalfButton from "./Button/HalfIconHalfButton";
import DownloadAssignmentInfo from "./Home/DownloadAssignmentInfo";

export const Home = (props) => {
  const { USER_NAME } = useSelector(state=> state.UserDetailsSlice);
  const [currentUser, setCurrentUser] = useState(false);
  const [isloginButtonLoading, setIsLoginButtonLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user !== null) {
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
      }else {
        setCurrentUser(null);
      }
      setIsLoginButtonLoading(false);
    });
    props.setProgress(100);
  }, []);

  return (
    <>
    <div className="flex flex-col gap-3 m-6 max-sm:m-4" >
      <div className="flex justify-between items-center gap-x-10 max-sm:hidden">
          <h1 className="text-lg md:text-xl font-bold text-blue-500 truncate">Welcome {USER_NAME}</h1>
          <div className='flex flex-row justify-between content-center items-center gap-x-10 z-10'>
            <div className="max-sm:hidden relative">
              <span className="z-20"><HalfIconHalfButton buttonIcon={<FaDownload/>} buttonName={"Download Assignment"}/></span>
              <span className="absolute z-10"><DownloadAssignmentInfo/></span>
            </div>
            {!isloginButtonLoading &&
              (currentUser) ? (<AccountDropDown setCurrentUser={setCurrentUser}/>)
              :
              <button onClick={props.signInWithGoogle} className={`${isloginButtonLoading ? 'hidden':''} bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2`}>Login</button>
            }
            {
              isloginButtonLoading && <img className="h-12 w-16" src={spinner}/>
            }
            </div>
      </div>
          <span className="max-sm:block hidden">
            <span className="z-20"><HalfIconHalfButton buttonIcon={<FaDownload/>} buttonName={"Download Assignment"}/></span>
            <span className="absolute z-10"><DownloadAssignmentInfo/></span>

          </span>  



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

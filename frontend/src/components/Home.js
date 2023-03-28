import React, { useEffect } from "react";

import '../css/Home.css'
import { AccountDropDown } from "./Navbar/AccountDropDown";
import { Carousel } from "./Home/Carousel";
import { HomeEvent } from './HomeEvent'

import { Home2 } from "./Home/Home2";
import { Route, Routes } from "react-router-dom";
import { MainHomePage } from "./MainHomePage";
import { CommitteesList } from "./Committees/CommitteesList";
import { PastYearPaper } from "./PastYearPapers/PastYearPaper";
import { Events } from "./Event/Events";

export const Home = (props) => {
  useEffect(()=>{
    props.setProgress(100);
  },[])

  return (
    <>
    <div className="flex flex-col gap-6 m-6" >
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-blue-500">{'Welcome guestUser42'}</h1>
        <AccountDropDown/>
      </div>



       <div> 
              <Routes>
                <Route exact path="/committees" element={<CommitteesList setProgress={props.setProgress}/>}/>
                <Route exact path="/" element={<Home2  setProgress={props.setProgress}/>} />
                <Route exact path="/pastYearPapers" element={<PastYearPaper  setProgress={props.setProgress}/>} />
                <Route exact path="events/*" element={<Events  setProgress={props.setProgress}/>} />
              </Routes>
        </div>
    </div>
 

    </>
  );
};

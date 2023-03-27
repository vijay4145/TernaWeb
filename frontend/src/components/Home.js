import React, { useEffect } from "react";
import Lottie from "lottie-react";
import * as  book_animation from "../lottie_animation/book_animation.json";
import '../css/Home.css'
import { AccountDropDown } from "./Navbar/AccountDropDown";
import { Carousel } from "./Home/Carousel";
import { HomeEvent } from './HomeEvent'
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import  student from '../lottie_animation/student.png';
import  rank_image from '../lottie_animation/rank_image.png';
import  feedback from '../lottie_animation/feedback.png';
import { TbSchool } from 'react-icons/tb'

export const Home = (props) => {
  useEffect(()=>{
    props.setProgress(100);
  },[])

  return (
    <>
    <div className="flex flex-col gap-6 m-6 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-blue-500">{'Welcome guestUser42'}</h1>
        <AccountDropDown/>
      </div>

      <div className="md:grid grid-cols-2 text-center items-center">
        <Lottie className="max-md:h-56" loop={1} animationData={book_animation}/>
        <div className="flex flex-col">
          <span className="text-lg text-blue-400">Welcome to</span>
          <span className="text-3xl md:text-4xl font-bold text-blue-700">Terna Engineering College</span>
          <br className="hidden md:block"/>
          <span className="flex gap-4 items-center justify-center text-white bg-blue-200 max-w-fit p-2 rounded-xl max-md:hidden">
            <div className="flex flex-col items-center">
              <img src={rank_image} alt="" className="h-10"/>
              <p>Ranked 40th by Time Ranking</p>
            </div>
            
            <div className="bg-white h-8" style={{border: '1px solid white'}}></div>
            <div className="flex flex-col items-center">
              <img src={student} alt="" className="h-10"/>
              <p>Family Of 32k+ Students</p>
            </div>

            <div className="bg-white h-8" style={{border: '1px solid white'}}></div>
            <div className="flex flex-col items-center">
              <img src={feedback} alt="" className="h-10"/>
              <p>32+ Years Of Presence</p>
            </div>
          </span>
          <span className="hidden md:flex flex-col gap-1 mt-2">
            <span>Expore Every Committee At Your Fingertips <br/></span> 
            <span>Get Updates Of Upcoming Events <br/></span> 
            <span> Get Past Year Papers <br/></span>
          </span>

          <div id="share-button" className=" flex flex-col items-center gap-1 mt-2">
                <div className="flex flex-row gap-4 flex-wrap">
                  <a target="_blank">
                    <AiOutlineMail color="#c71610" className="h-6 w-6 md:h-10 md:w-10"/>
                  </a>
                  <a target="_blank">
                    <BsDiscord color="#3b5998" className="h-6 w-6 md:h-10 md:w-10"/>
                  </a>
                  <a target="_blank">
                    <AiFillLinkedin color="#0072b1" className="h-6 w-6 md:h-10 md:w-10"/>
                    </a>
                  <a target="_blank">
                    <TbWorld color="#0072b1" className="h-6 w-6 md:h-10 md:w-10"/>
                  </a>
                </div>
              </div>
              <a href="#explore-more-btn" className="flex items-center justify-center mt-3">
                <div className="items-center flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 md:py-3 px-2  rounded">
                  <TbSchool className="h-7 w-7"/>
                  <span className="text-sm md:text-lg"> Explore Terna</span>
                  </div>
              </a>
        </div>
      </div>

      <div className="flex flex-col gap-3">
          <br/>
          <br/>
          {/* <Carousel/> */}
          <HomeEvent/>
    </div>
      </div>

    </>
  );
};

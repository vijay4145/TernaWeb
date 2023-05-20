import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import  student from '../../lottie_animation/student.png';
import  rank_image from '../../lottie_animation/rank_image.png';
import  feedback from '../../lottie_animation/feedback.png';
import { TbSchool } from 'react-icons/tb';
import Lottie from "lottie-react";
import * as  book_animation from "../../lottie_animation/book_animation.json";
import { HomeEvent } from '../HomeEvent';

export const Home2 = () => {
  return (
    <>
    <div className="md:grid grid-cols-2 text-center items-center min-h-[65vh]">
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
                <div className="flex flex-row gap-4 ">
                  <a href='info@ternaengg.ac.in' target="_blank">
                    <AiOutlineMail color="#c71610" className="h-7 w-7 md:h-10 md:w-10"/>
                  </a>
                  <a href='https://www.instagram.com/ternaengg/' target="_blank">
                    <BsInstagram color='#AA336A' className="h-6 w-6 md:h-9 md:w-9"/>
                  </a>
                  <a href='https://www.linkedin.com/school/terna-engineering-college/' target="_blank">
                    <AiFillLinkedin color="#0072b1" className="h-7 w-7 md:h-10 md:w-10"/>
                    </a>
                  <a href='https://ternaengg.ac.in/' target="_blank">
                    <TbWorld color="#0072b1" className="h-7 w-7 md:h-10 md:w-10"/>
                  </a>
                </div>
              </div>
              <a href="#explore-more-btn" className="flex items-center justify-center mt-3">
                <div className="items-center flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-3  rounded">
                  <TbSchool className="h-7 w-7"/>
                  <span className="text-base md:text-lg"> Explore Terna</span>
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
    </>
  )
}

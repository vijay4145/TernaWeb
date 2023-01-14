import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import Lottie from "lottie-react";
import * as welcome_animation from "../lottie_animation/welcome.json";
import * as note_animation from '../lottie_animation/note_animation.json';
import '../css/Home.css'

export const Home = () => {
  // const options = {
  //     animationData: wave_animation,
  //     loop: true
  //   };

  //   const  View = useLottie(options);

  return (
    <>
      <div className="flex content-center items-center p-4" style={{minHeight: '90vh', marginTop: '10px'}}>
        <div className="flex flex-row justify-between" style={{width: '95vw'}}>
          <div className="main-content">
            {/* <Navbar/> */}


            <div name='mainContentAtCenter' className="flex flex-col justify-between items-center content-center break-words">


              <div>
                <h1 className="text-2xl font-semibold text-blue-900 break-words">Welcome to <br></br> <span className="font-extrabold text-4xl">Terna Engineering College</span> </h1>
                <p><br/>Get past year IAT papers, <br></br> Get notification of upcoming Events <br></br>Explore every committees of terna at your fingerTip</p>
                <br></br>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <a href="#committeSection">Explore Terna</a></button>
              </div>
              
              
              
              <div name="animation_at_bottom" className="flex flex-row flex-wrap">
                <div style={{position: 'relative'}}>
                  <Lottie animationData={note_animation} ></Lottie>
                  <div style={{position: 'absolute', top: '0',width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 className="text-white px-auto">Get updates <br/>of upcoming<br/> Events</h1>
                  </div>
                </div>
                <div style={{position: 'relative'}}>
                  <Lottie animationData={note_animation} ></Lottie>
                  <div style={{position: 'absolute', top: '0',width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 className="text-white px-auto">Get Past Year <br/> Question Paper</h1>
                  </div>
                </div>
                <div style={{position: 'relative'}}>
                  <Lottie animationData={note_animation} ></Lottie>
                  <div style={{position: 'absolute', top: '0',width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 className="text-white px-auto">Explore <br/>commitees<br/> to join</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>






          <div
            className="flex flex-row justify-between content-center items-center animation-side"
            style={{ height: "70vh", width: '45vw'}}
          >
            <Lottie
              animationData={welcome_animation}
              style={{ width: "45vw", height: '100vh', marginTop: "10px", marginRight: "25px" }}
            ></Lottie>
          </div>
        </div>
      </div>
    </>
  );
};

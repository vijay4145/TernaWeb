import React, { useState } from 'react'
import university_icon from "../lottie_animation/university.png";
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
export const Navbar = () => {

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
            <a href='/event'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2'>Login</button></a>
          </ul>

        </div>

    </>
  )
}

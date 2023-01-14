import React from 'react'
import university_icon from "../lottie_animation/university.png";
import '../css/Navbar.css';

export const Navbar = () => {
  return (
    <>
        <div className='flex flex-row justify-between' style={{width: '95vw', overflowX: 'hidden'}}>
          <div name="title" className="flex flex-row item-center content-center m-1">
              <img src={university_icon} alt="" />
              <div className="flex flex-col">
                <h1 className="flex content-center items-center text-blue-700 text-3xl">
                  𝑻𝒆𝒓𝒏𝒂
                </h1>
                <h6 className="text-xs text-blue-400">Terna For Students</h6>
              </div>
          </div>

          <ul className='flex flex-row justify content-center items-center gap-x-20 mx-8 z-10'>
            <li className='nav'>Home</li>
            <li className='nav'>Committees</li>
            <li className='nav'>Question Papers</li>
            <li className='nav'>Events</li>
          </ul>

        </div>

    </>
  )
}

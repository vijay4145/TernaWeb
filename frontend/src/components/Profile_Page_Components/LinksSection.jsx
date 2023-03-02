import React from 'react'
import {FcLink} from 'react-icons/fc';
import * as empty_box from '../../lottie_animation/empty_box.json';
import Lottie from "lottie-react";
import { useSelector } from 'react-redux';

export const LinksSection = () => {
  const { LINKS } = useSelector((state)=> state.UserDetailsSlice)
  return (
    <>
    <h1 className='text-lg ml-3 text-blue-500 font-semibold mb-1'>Links:</h1>
    <section id='display-empty-box-animation-if-no-links'>
      {LINKS.length === 0 && <div id="no-activity" className="flex items-center flex-col">
          <Lottie animationData={empty_box} className='h-52'/>
          <h4 className="text-blue-500 font-bold text-lg">No Links</h4>
      </div>
      }
    </section>
    <section id='links-display' className='flex gap-2 flex-col'>
        {
          LINKS.length > 0 && LINKS.map((link)=>{
          return <div className='flex gap-2 items-center'>
                  <FcLink/>
                  <a href="https://www.google.com"  className='hover:text-blue-600 underline'> https://www.google.com</a>         
                </div>
          })
        }
    </section>
    </>
  )
}


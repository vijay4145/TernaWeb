import React from 'react'
import { Link } from 'react-router-dom'
import eventIcon from '../lottie_animation/event_icon.jpg'

export const HomeEvent = () => {
  return (
    <>
    <div id="Event">

      <div className='flex justify-center content-center' style={{minHeight:'88vh'}}>
        <div className='flex max-sm:flex-col md:flex-row justify-evenly w-full'>
            <div className='flex content-center justify-center'>
              <img src={eventIcon} alt="Not found" className='max-sm:w-[60vw] md:w-[40vw] h-auto object-contain'/>
            </div>
            <div className='flex flex-col content-center justify-center h-full md:w-[40vw] max-sm:w-[100vw] max-sm:px-5'>
              <h1 className='text-3xl text-blue-800 font-semibold text-center underline drop-shadow-md'>Explore Upcoming Events</h1>
              <p className='mt-6 max-sm:px-5' >
                With TernaWeb Website You can explore any upcoming event that's happening in our college.Events are exercises that are required apart the typical course of study. Students events are basic part of your campus life as they exhibit who you are outside of the study hall and give a chance to explore your abilities and leadership quality. At the point when you take part in numerous various events, you’ll get the chance to investigate a scope of interests and you never realized you had! Additionally, enhancing your inclinations along these lines widens your perspective.
              </p>
              <span className='flex justify-center mt-5'>
              <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded drop-shadow-sm' to='/events'>So Let's Explore Upcoming Events</Link>
              </span>
                
            </div>
          </div>
        </div>

    </div>
  
    </>
  )
}

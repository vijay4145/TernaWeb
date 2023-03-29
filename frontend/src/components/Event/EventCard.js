import React, { useEffect } from "react";
import { AiOutlineSchedule } from 'react-icons/ai';
import { Link } from "react-router-dom";


export const EventCard = ({event}) => {

  const getHeading = ()=>{
    let newHeading = event.EVENT_HEADING;
    const limit = 30;
    if(newHeading.length > limit){
      newHeading = newHeading.substring(0,30);
      newHeading = newHeading + '...';
    }
    return newHeading;
  }
  
  return (
    <>
    <Link to={'eventdetail/'+event._id} className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-1 pb-3 cursor-pointer">
      <div className="flex justify-center">
          <img className="rounded-t-lg h-48 w-auto" src={event.EVENT_IMAGE_URL} alt=""/>
      </div>
      <div id="event_heading" className="px-3 mt-1">
          <h5 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">{getHeading()}</h5>
      </div>
      <div id="event_schedule" className="flex px-3 items-center gap-1">
        <AiOutlineSchedule color="blue" className="h-5 w-5"/>
        <p>{event.EVENT_START.split('T')[0]}</p>
      </div>
      <div className="px-3">
        <p>{event.EVENT_DESCRIPTION}</p>
      </div>
      <div className="flex px-3">
        <button className="items-center flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-3  rounded">Explore</button>
      </div>
    </Link>
    </>
  );
};

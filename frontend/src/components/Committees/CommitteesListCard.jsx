import React, { useEffect } from 'react'
import { HastTagCards } from '../Event/HastTagCards';
import '../../css/ScrollbarHide.css'
import { Link } from 'react-router-dom'

export const CommitteesListCard = (props) => {
    
  return (
    <>


<Link to={'committedetail/'+props.committee._id} target="_blank" className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-1 pb-3 cursor-pointer">
      <div className="flex justify-center">
          <img className="rounded-t-lg h-48 w-auto" src={props.committee.COMMITTEE_IMAGE_URL} alt="COMMITTEE_IMAGE_URL not found"/>
      </div>
      <div id="event_heading" className="px-3 mt-1">
          <h5 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">{props.committee.COMMITTEE_NAME}</h5>
      </div>
      {/* <div id="event_schedule" className="flex px-3 items-center gap-1">
        <AiOutlineSchedule color="blue" className="h-5 w-5"/>
        <p>{event.EVENT_START.split('T')[0]}</p>
      </div> */}
        <div id='HashTagCards' className='px-3  flex flex-row overflow-x-scroll whitespace-nowrap gap-1 max-w-full scrollbar-hide'>
            {props.committee.COMMITTEE_TAGS.map((tag, i)=>{
                return <HastTagCards hashTag={tag} forDisplay={true} key={i}/>
            })}
        </div>
      <div className="px-3">
        <p>{props.committee.COMMITTEE_DESCRIPTION}</p>
      </div>
      <div className="flex px-3">
        <button className="items-center flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-3  rounded">Explore</button>
      </div>
    </Link>

    </>
  )
}

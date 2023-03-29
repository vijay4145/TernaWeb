import React, { useEffect } from 'react'
import { HastTagCards } from '../Event/HastTagCards';
import '../../css/ScrollbarHide.css'
import { Link } from 'react-router-dom'

export const CommitteesListCard = (props) => {
    useEffect(() => {
        console.log(props.committee);
    }, [])
    
    
  return (
    <>
    
{/* <Link target='_blank' to={props.committee._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div href="#">
        <img className="rounded-t-lg w-[100%] h-[60%]" src={props.committee.COMMITTEE_IMAGE_URL} alt="" />
    </div>
    <div className="p-5">
        <div href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.committee.COMMITTEE_NAME}</h5>
        </div>
        <div id='HashTagCards' className='mb-3 flex flex-row overflow-x-scroll whitespace-nowrap gap-1 max-w-full scrollbar-hide'>
            {props.committee.COMMITTEE_TAGS.map((tag, i)=>{
                return <HastTagCards hashTag={tag} forDisplay={true} key={i}/>
            })}
        </div>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </div>
    </div>
</Link> */}


<Link to={props.committee._id} target='_blank' className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-1 pb-3 cursor-pointer">
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

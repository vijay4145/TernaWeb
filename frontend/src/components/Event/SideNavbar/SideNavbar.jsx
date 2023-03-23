import React, { useEffect, useState } from 'react'
import './sideNavbar.css'
import { AiOutlineOrderedList, AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import { RiDraftLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';


export const SideNavbar = ({toggleFilterButton}) => {
  // All Events , Upcoming Events , Popular Events , Recommended Events , Add Events , Draft Events 
  const [selectedItem, setSelectedItem] = useState([false,false,false,false,false,false]);
  const location = useLocation();
  useEffect(() => {
    let new_item = [false,false,false,false,false,false];
    let path = location.pathname.split('/')[2];
      if(path === 'all-events') new_item[0] = true;
    else if(path === 'upcoming-events') new_item[1] = true;
    else if(path === 'popular-events') new_item[2] = true;
    else if(path === 'recommended-events') new_item[3] = true;
    else if(path === 'add-event') new_item[4] = true;
    setSelectedItem(new_item);
  }, [location])
  
  return (
    <>
    <section onClick={()=>{toggleFilterButton && toggleFilterButton()}} id='SideNavbar' className='ml-1 mr-4 flex flex-col p-3 gap-2 justify-start'>
      <div className={`${selectedItem[0] ? 'selected-btn':''}`}>
        <Link to='all-events' className='sideNavbar-btn'>
          <AiOutlineOrderedList/>
          All Events
        </Link>
        <hr/>
      </div>
      <div className={`${selectedItem[1] ? 'selected-btn':''}`}>
        <Link to='upcoming-events' className='sideNavbar-btn'>
          <AiOutlineCalendar/>
          Upcoming Events
        </Link>
        <hr/>
      </div>
      <div className={`${selectedItem[2] ? 'selected-btn':''}`}>
        <Link to='popular-events' className='sideNavbar-btn'>
          <BsGraphUp/>
          Popular Events
        </Link>
        <hr/>
      </div>
      <div className={`${selectedItem[3] ? 'selected-btn':''}`}>
        <Link to='recommended-events' className='sideNavbar-btn'>
          <FiThumbsUp/>
          Recommended Events
        </Link>
        <hr/>
      </div>
      <div className={`${selectedItem[4] ? 'selected-btn':''}`}>
        <Link to='add-event' className='sideNavbar-btn'>
          <AiOutlinePlusCircle/>
          Add Events
        </Link>
        <hr/>
      </div>
      <div className={`${selectedItem[5] ? 'selected-btn':''}`}>
        <button className='sideNavbar-btn'>
          <RiDraftLine/>
          Draft Events
        </button>
        <hr/>
      </div>


      <br/>
      <br/>
    </section>
    </>
  )
}

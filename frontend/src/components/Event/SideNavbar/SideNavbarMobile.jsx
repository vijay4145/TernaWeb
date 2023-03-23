import React, { useEffect } from 'react'
import { useState } from 'react';
import {AiFillRightCircle, AiFillLeftCircle} from 'react-icons/ai'
import { useLocation } from 'react-router-dom';
import { SideNavbar } from "./SideNavbar";
import './sideNavbarMobile.css'

export const SideNavbarMobile = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilterButton = ()=>{
    setIsFilterOpen(!isFilterOpen);
  }
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState('All Events')
  useEffect(() => {
    let filter_name = location.pathname.split('/')[2];
    if(filter_name){
    filter_name = filter_name.replace(/-/g, ' ');
    filter_name = filter_name.toLowerCase(); // Convert string to lowercase
  filter_name = filter_name.replace(/\b\w/g, (c) => c.toUpperCase());
    setSelectedButton(filter_name || 'All Events')
    }
  }, [location])
  
  
  return (
    <>
    <div className='shadow-lg fixed flex gap-1 z-10 bg-white rounded-xl' style={{transition: 'all 3s ease-in'}}>
      <div className={`${isFilterOpen ? 'max-w-fit h-fit':'max-w-0 h-0'} overflow-hidden`} style={{transition: 'all 3s ease-in'}}>
      <SideNavbar toggleFilterButton={toggleFilterButton}/>
      </div>

    <span className='flex gap-1 h-fit p-2' onClick={toggleFilterButton}>
      {isFilterOpen ?
        <AiFillLeftCircle size={28} color='blue' />
        :
        <AiFillRightCircle size={28} color='blue'/> 
      }
      <h4>{selectedButton}</h4>
    </span>
    </div>

    </>
  )
}

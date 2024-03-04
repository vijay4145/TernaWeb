import React, { useEffect, useState } from 'react'
import '../../css/Home.css';
import { FaWindowClose } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";


const DownloadAssignmentInfo = ({showNote, setShowNote}) => {
  AOS.init({
    offset: 20,
  });


  return (
    <>
    {showNote && <div data-aos="fade-down">
      <div className='comment-box-triangle'>
      </div>
      <div className='comment-box-square flex flex-col gap-2'>
        <div className='flex gap-2'>
          <h5 className='font-bold text-xl'>Get Your Assignment and Experiment Now!</h5>
          <div className=' hover:text-gray-100' onClick={()=>setShowNote(false)}><FaWindowClose/></div>
        </div>
        <p>Your next Assignment and Experiments awaits! Download it now to stay ahead in your studies.</p>
      </div>
    </div>}
    </>

  )
}

export default DownloadAssignmentInfo

import React, { useEffect, useState } from 'react'
import '../../css/Home.css';
import { FaWindowClose } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";


const DownloadAssignmentInfo = () => {
  AOS.init({
    offset: 20,
  });
  const [showNote, setShowNote] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNote(true);
    }, 1100); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
    {showNote && <div data-aos="fade-down">
      <div className='comment-box-triangle'>
      </div>
      <div className='comment-box-square flex flex-col gap-2'>
        <div className='flex gap-2'>
          <h5 className='font-bold text-xl'>Get Your Assignment Now!</h5>
          <div className=' hover:text-gray-100' onClick={()=>setShowNote(false)}><FaWindowClose/></div>
        </div>
        <p>Your next assignment awaits! Download it now to stay ahead in your studies.</p>
      </div>
    </div>}
    </>

  )
}

export default DownloadAssignmentInfo

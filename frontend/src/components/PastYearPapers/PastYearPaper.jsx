import React, { useEffect, useState } from 'react'
import '../../css/ScrollbarHide.css'
import { Route, useLocation, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import ResourceFormInFullScreenMode from './ResourceFormInFullScreenMode';

export const PastYearPaper = (props) => {

  AOS.init({
    offset: 20
  });
  return (
    <>
    <div data-aos="flip-right" className='flex flex-col gap-2 min-h-[82vh]'>
      <ResourceFormInFullScreenMode/>
    </div>
    </>
  )
}

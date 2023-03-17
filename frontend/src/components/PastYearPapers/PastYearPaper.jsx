import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {Sidebar} from './sidebar/Sidebar';
import '../../css/ScrollbarHide.css'
import { QuestionPaperDisplay } from './QuestionPaperDisplay';
import { SidebarForSubjects } from './sidebar/SideBarForSubjects';

export const PastYearPaper = (props) => {
  useEffect(()=>{
    props.setProgress(100);
  },[]);
  return (
    <>
    <div className='grid grid-cols-4 gap-3'>
      <div className=' shadow-lg hover:shadow-2xl rounded-3xl h-[88vh] overflow-scroll scrollbar-hide'>
        <Sidebar/>
      </div>
      <div className=' rounded-3xl p-3 col-span-2  h-[88vh] overflow-scroll' style={{backgroundColor: '#FFFFFD'}}>
        <QuestionPaperDisplay/>
      </div>
      <div className=' shadow-lg hover:shadow-2xl rounded-3xl h-[88vh] overflow-scroll scrollbar-hide'>
        <SidebarForSubjects/>
      </div>

    </div>
    </>
  )
}

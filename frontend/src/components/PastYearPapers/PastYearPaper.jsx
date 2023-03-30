import React, { useEffect, useState } from 'react'
import { SubjectBar } from './SubjectBar/SubjectBar';
import '../../css/ScrollbarHide.css'
import { QuestionPaperDisplay } from './QuestionPaperDisplay';
import { Route, useLocation, Routes } from 'react-router-dom';
import { Gcr } from "./SubjectBar/Gcr";

export const PastYearPaper = (props) => {
  const location = useLocation();
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const [gcr, setGcr] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url_branch = searchParams.get('branch');
    const url_semester = searchParams.get('semester');
    const gcr_param = searchParams.get('gcr');
    if(url_branch && url_branch !== '-') setBranch(url_branch);
    if(url_semester && url_semester !== '-') setSemester(url_semester);
    if(gcr_param) setGcr(true);
  }, [location])
  

  useEffect(()=>{
    props.setProgress(100);
  },[]);
  return (
    <>
    <div className='flex flex-col gap-2 min-h-[82vh]'>
        <SubjectBar/>
      {branch !== null && semester !== null &&
        <div className=' rounded-3xl p-3' style={{backgroundColor: '#FFFFFD'}}>
          <h1 className="flex break-words text-lg text-blue-800 font-serif mb-3">
            {`Resources > ${branch} > semester ${semester} ${gcr ? '> Google Classrooms Link': ''}`}
          </h1>
          {
            gcr ? <Gcr branch={branch} semester={semester}/> : <QuestionPaperDisplay/>
          }
        </div>
      }
    </div>
    </>
  )
}

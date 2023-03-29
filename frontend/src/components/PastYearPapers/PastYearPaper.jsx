import React, { useEffect, useState } from 'react'
import { SubjectBar } from './SubjectBar/SubjectBar';
import '../../css/ScrollbarHide.css'
import { QuestionPaperDisplay } from './QuestionPaperDisplay';
import { useLocation } from 'react-router-dom';

export const PastYearPaper = (props) => {
  const location = useLocation();
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url_branch = searchParams.get('branch');
    const url_semester = searchParams.get('semester');
    if(url_branch && url_branch !== '-') setBranch(url_branch);
    if(url_semester && url_semester !== '-') setSemester(url_semester);
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
        <QuestionPaperDisplay/>
        </div>
      }
    </div>
    </>
  )
}

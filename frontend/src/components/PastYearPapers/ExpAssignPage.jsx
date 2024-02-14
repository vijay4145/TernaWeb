import React, { useEffect, useState } from 'react'
import { getExperimentList } from '../../http';
import { ExperimentList } from './ExperimentList';
import AssignmentList from './AssignmentList';

export const ExpAssignPage = ({setProgress}) => {
  const [list, setlist] = useState(null);
  const searchParams = new URLSearchParams(window.location.search);
  const [isAssignmentPresent, setIsAssignmentPresent] = useState(false);
  const [isIATpaperPresent, setIsIATpaperPresent] = useState(false);
  const [isPYPpresent, setIsPYPpresent] = useState(false);

  useEffect(() => {
    // TODO : fetch experiments and assignment list from backend
    const branch = searchParams.get('branch');
    const semester = searchParams.get('semester');
    const subject = searchParams.get('subject');
    getExperimentList(branch, semester, subject).then(res=>{
      if(res.status == 200){
        setlist(res.data);
      }
    }).catch(err=>{
    })
  }, [])

  useEffect(()=>{
    if(list !== null){
      for(let ele of list){
        if(ele.TYPE === 'assignment') setIsAssignmentPresent(true);
        if(ele.TYPE === 'pyp') setIsPYPpresent(true);
        if(ele.TYPE === 'iat') setIsIATpaperPresent(true);
      }
    }
  }, [list]);
  return (
    <div>
      <h1 className='text-xl font-bold underline'>Experiments :</h1>
      <ExperimentList list={list}/>
      <br/>
      {isAssignmentPresent && <h1 className='text-xl font-bold underline'>Assignments :</h1>}
      {isAssignmentPresent && <AssignmentList list={list} type={"assignment"}/>}
      <br/>
      {isIATpaperPresent && <h1 className='text-xl font-bold underline'>Internal Assessment Test(IAT) Paper :</h1>}
      {isIATpaperPresent && <AssignmentList list={list} type={"iat"}/>}
      <br/>
      {isPYPpresent && <h1 className='text-xl font-bold underline'>Past Year Semester Paper :</h1>}
      {isPYPpresent && <AssignmentList list={list} type={"pyp"}/>}
    </div>
  )
}

export default ExpAssignPage

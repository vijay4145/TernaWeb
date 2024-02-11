import React, { useEffect, useState } from 'react'
import { getExperimentList } from '../../http';
import { ExperimentList } from './ExperimentList';
import AssignmentList from './AssignmentList';

export const ExpAssignPage = ({setProgress}) => {
  const [list, setlist] = useState(null);
  const searchParams = new URLSearchParams(window.location.search);
  const [isAssignmentPresent, setIsAssignmentPresent] = useState(false);

  useEffect(() => {
    // TODO : fetch experiments and assignment list from backend
    const branch = searchParams.get('branch');
    const semester = searchParams.get('semester');
    const subject = searchParams.get('subject');
    getExperimentList(branch, semester, subject).then(res=>{
      console.log(res.data);
      if(res.status == 200){
        setlist(res.data);
        console.log(res.data);
      }
    }).catch(err=>{
    })
  }, [])

  useEffect(()=>{
    if(list !== null){
      for(let ele of list){
        if(ele.hasOwnProperty('ASSIGNMENT_NO')){
          setIsAssignmentPresent(true);
          break;
        }
      }
    }
  }, [list]);
  return (
    <div>
      <h1 className='text-xl font-bold underline'>Experiments :</h1>
      <ExperimentList list={list}/>
      <br/>
      {isAssignmentPresent && <h1 className='text-xl font-bold underline'>Assignments :</h1>}
      {isAssignmentPresent && <AssignmentList list={list}/>}
    </div>
  )
}

export default ExpAssignPage

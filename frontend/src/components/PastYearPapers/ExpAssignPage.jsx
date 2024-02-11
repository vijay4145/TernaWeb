import React, { useEffect, useState } from 'react'
import { getExperimentList } from '../../http';
import { ExperimentList } from './ExperimentList';

export const ExpAssignPage = ({setProgress}) => {
  const [experimentList, setExperimentList] = useState(null);
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    // TODO : fetch experiments and assignment list from backend
    const branch = searchParams.get('branch');
    const semester = searchParams.get('semester');
    const subject = searchParams.get('subject');
    getExperimentList(branch, semester, subject).then(res=>{
      console.log(res.data);
      if(res.status == 200){
        setExperimentList(res.data);
        console.log(res.data);
      }
    }).catch(err=>{

    })
  }, [])
  return (
    <div>
      <h1>ExpAssignPage</h1>
      <ExperimentList expList={experimentList}/>
    </div>
  )
}

export default ExpAssignPage

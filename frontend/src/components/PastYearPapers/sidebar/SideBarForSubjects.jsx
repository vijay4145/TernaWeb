import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const SidebarForSubjects = () => {
  let {BRANCH, SEMESTER} = useSelector((state)=>state.SelectedBranchSemesterSlice);
  useEffect(() => {
    setCurrBranch(BRANCH);
    setCurrSemester(SEMESTER);
  }, [SEMESTER])
  
  const semester = [1,2,3,4,5,6,7,8];
  const [currBranch, setCurrBranch] = useState(null);
  const [currSemester, setCurrSemester] = useState(null);
  const [CurrSubjectSelected, setCurrSubjectSelected] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const qp = searchParams.get('questionPaper');
    if(qp !== null){
      setCurrBranch(qp.split('/')[0]);
      setCurrSemester(qp.split('/')[1]); 
      setCurrSubjectSelected(qp.split('/')[2]);
      console.log(qp.split('/')[2]); 
    }else if(BRANCH !== null && SEMESTER !== null){
      setCurrBranch(BRANCH);
      setCurrSemester(SEMESTER);
    }


  }, [])
  
  return (
    <>
       <form className="m-2 p-2 text-center flex flex-col gap-7">
        <h1 className="text-2xl font-bold">Select Subjects</h1>
        <div className="p-2 flex flex-col gap-4">
            {
                  currBranch !== null && currSemester != null && subject[currBranch] && subject[currBranch][currSemester] && subject[currBranch][currSemester].map((sub, i)=>{
                    return    <button name='questionPaper' value={currBranch + '/' + currSemester + '/' + sub} className={`${CurrSubjectSelected == sub ? 'bg-blue-500 text-white':'text-gray-500'} branch-name-text text-md hover:bg-blue-400 p-4 rounded-lg hover:text-white hover:shadow-lg shadow-md font-semibold`}>
                    {" "}
                    {sub}
                  </button>
                })
            }
        </div>
      </form>

    </>
  )
}


const subject = {
    'Computer Engineering' : {
      6:[
        'Artificial Intelligence',
        'Cryptography And System Security',
        'Internet Of Things',
        'Mobile Computing',
        'System Programming And Compiler Construction',
      ]
  }
}
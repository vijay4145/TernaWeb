import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

export const PastYearPaper = (props) => {
  const [semesterState, setSemesterState] = useState('6');
  const [branchState, setBranchState] = useState('Computer Engineering')
  const semesterOption = ['1','2','3','4','5','6','7','8'];
  const optionsBranch = [
    "Computer Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Electrical Engineering3",
    "Electrical Engineerin2g",
    "Electrical Engineering1",
    "Mechatronics",
  ];

  const subjectOption = [
    'System programming & compiler construction',
    'Cryptography & system security',
    'Mobile computing',
    'Artificial intelligence',
    'Internet of things'
  ]


  useEffect(()=>{
    props.setProgress(100);
  },[]);
  return (
    <>
    <section id='past-year-papers'>
      <section id='input-section'>
        <form action="" className='m-4 flex gap-4 flex-wrap'>

        <Autocomplete
                className='max-w-md'
                id="Branch"
                defaultValue={branchState}
                fullWidth
                onChange={(_, v) => setBranchState(v)}
                options={optionsBranch}
                clearOnEscape
                renderInput={(params) => (
                  <div>
                    <TextField required {...params} label="Branch" fullWidth />
                  </div>
                )}
        />
        

        <TextField cla  type='number' label="Semester" fullWidth />
        
        <Autocomplete
                className='max-w-md'
                id="Subject"
                defaultValue={semesterState}
                fullWidth
                onChange={(_, v) => setBranchState(v)}
                options={subjectOption}
                clearOnEscape
                renderInput={(params) => (
                  <div>
                    <TextField required {...params} label="Subject" fullWidth />
                  </div>
                )}
                />

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded drop-shadow-sm px-3 py-2'>Search</button>  
      </form>
        
      </section>

      <section id='papers-section' className='m-3 mt-6'>
        <hr className='ml-10 mr-10'/>
      </section>
    </section>
    </>
  )
}

import React from 'react'
import { useState } from 'react'
import {
    Autocomplete,
    TextField,
  } from "@mui/material";
import { useEffect } from 'react';
import { getExperimentList } from '../../../http';
import loading_animation from '../../../lottie_animation/loading_animation_2.json'
import Lottie from 'lottie-react';
import { ExperimentList } from '../ExperimentList';
import { useLocation } from 'react-router-dom';


export const Experiment = ({branch, semester}) => {
    const [subjectAvailable, setSubjectAvailable] = useState([]);
    const [currSubject, setCurrSubject] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [experimentList, setExperimentList] = useState([]);

    const location = useLocation();
    useEffect(()=>{
      const queryParams = new URLSearchParams(location.search);
      const subject = queryParams.get('subject');
      if(subject && subjectAvailable.includes(subject)){
        setCurrSubject(subject);
      }
    }, [subjectAvailable])

    useEffect(() => {
        if(semester === '6'){
            setSubjectAvailable([
                'SPCC',
                'CCL',
                'MC',
                'AI',   
            ])
        }
    }, [])

    useEffect(() => {
        if(currSubject && currSubject !== null && currSubject !== '-'){
            setIsLoading(true);
            // // backend call
            getExperimentList(branch, semester, currSubject).then(res=>{
              if(res.success && res.success == false){
                setIsLoading(false);
                return ;
              }
              setExperimentList(res.data);
              console.log(res.data);
              setIsLoading(false);
            }).catch(err=>{
              setIsLoading(false)
              console.log(err);
            })
        }
    }, [currSubject])
    
    
  return (
    <>
       <div id="subject" className="relative z-0 max-w-md">
              <Autocomplete
                fullWidth
                value={currSubject === null ? "-" : currSubject}
                onChange={(_, v) => setCurrSubject(v)}
                options={subjectAvailable}
                clearOnEscape
                renderInput={(params) => (
                  <div>
                    <TextField
                      name="subject"
                      value={currSubject}
                      required
                      {...params}
                      label="Subject"
                      fullWidth
                    />
                  </div>
                )}
              />
        </div>


        <section id='loading' className={`${isLoading ? '':'hidden'} top-0 max-w-md`}>
          <Lottie animationData={loading_animation} />
        </section>
        {experimentList && 
          <h1 className='text-lg text-gray-500 mt-2'>{experimentList.length} experiments found</h1>
        }
        <div className='mt-4'>
            {
              experimentList && experimentList.length > 0 && experimentList.map(exp=>{
                return <ExperimentList exp={exp} currSubject={currSubject}/>
                
              })
            }
        </div>
    </>
  )
}

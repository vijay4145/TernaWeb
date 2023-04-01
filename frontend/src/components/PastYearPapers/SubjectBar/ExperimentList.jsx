import React, { useState } from 'react'
import { ExperimentDownloadDialog } from './ExperimentDownloadDialog'
import { AiFillCrown } from "react-icons/ai";
import { getAiExperimentUrlNormal } from '../../../http';

export const ExperimentList = (props) => {
    const [experimentDownloadDialogVisible, setExperimentDownloadDialogVisible] = useState(false);
    const [isDocxDownloading, setIsDocxDownloading] = useState(false);
    const downloadNormal = ()=>{
      setIsDocxDownloading(true);
      console.log("started");
      let data = {
        _id : props.exp._id
      }
      getAiExperimentUrlNormal(data).then(res=>{
        setIsDocxDownloading(false);
        window.open(res.data, '_blank');
      }).catch(err=>{
        setIsDocxDownloading(false);
        console.log(err);
      })
    }
  return (
    <>
    {experimentDownloadDialogVisible && <section id='ExperimentDowloadDialog' className='absolute top-6'>
        <ExperimentDownloadDialog exp={props.exp} currSubject={props.currSubject} setExperimentDownloadDialogVisible={setExperimentDownloadDialogVisible}/>
    </section>}

    <section className=' flex max-sm:flex-col gap-3 bg-purple-700 items-center text-white p-2 rounded-lg m-2 justify-between '>
        <h1>Experiment No {props.exp.EXPERIMENT_NO} </h1>
        <div className='flex gap-2 flex-wrap'>
          <div className='bg-white text-gray-500 p-2 items-center rounded-lg flex max-sm:w-full justify-center shadow-lg'>
            <AiFillCrown color='red' className='h-4 w-4'/>
            <button onClick={()=>setExperimentDownloadDialogVisible(!experimentDownloadDialogVisible)} className=''>Download AI completed</button>
          </div>
          <button className='bg-white text-gray-500 p-2 rounded-lg max-sm:w-full shadow-lg' onClick={downloadNormal}>{isDocxDownloading ? 'Please Wait...':'Download docx'}</button>
        </div>
    </section>
    </>
  )
}

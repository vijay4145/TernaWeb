import React, { useEffect, useState } from 'react'
import { ExperimentDownloadDialog } from './SubjectBar/ExperimentDownloadDialog'
import { AiFillCrown } from "react-icons/ai";
import { getAiExperimentUrlNormal } from '../../http';
import { Skeleton, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import LoadingDataForTable from './SubjectBar/LoadingDataForTable';
import OutlineButton from '../Button/OutlineButton';
import { FaDownload } from "react-icons/fa";


export const ExperimentList = ({expList}) => {
    const [experimentDownloadDialogVisible, setExperimentDownloadDialogVisible] = useState(false);
    const [isDocxDownloading, setIsDocxDownloading] = useState(false);
    const [isAiButtonDisabled, setIsAiButtonDisabled] = useState(false);

    const [isLoading, setIsLoading] = useState(true);


    const downloadNormal = ()=>{
    //   setIsDocxDownloading(true);
    //   console.log("started");
    //   let data = {
    //     _id : expList._id
    //   }
    //   getAiExperimentUrlNormal(data).then(res=>{
    //     setIsDocxDownloading(false);
    //     window.open(res.data, '_blank');
    //   }).catch(err=>{
    //     setIsDocxDownloading(false);
    //     console.log(err);
    //   })
    }

    useEffect(()=>{
      console.log(expList);
      if(expList !== null) setIsLoading(false);
    }, [expList])

   
    
  return (
    <>
    {/* {experimentDownloadDialogVisible && <section id='ExperimentDowloadDialog' className='absolute top-6'>
        <ExperimentDownloadDialog exp={expList.EXPERIMENT_NO} currSubject={expList.} setExperimentDownloadDialogVisible={setExperimentDownloadDialogVisible}/>
    </section>} */}



    <section className=' flex max-sm:flex-col gap-3 bg-purple-700 items-center text-white p-2 rounded-lg m-2 justify-between '>
        {/* <h1>Experiment No {expList.EXPERIMENT_NO} </h1> */}
        {/* <div className='flex gap-2 flex-wrap'>
          <div className='bg-white text-gray-500 p-2 items-center rounded-lg flex max-sm:w-full justify-center shadow-lg'>
            <AiFillCrown color='red' className='h-4 w-4'/>
            <button onClick={()=>setExperimentDownloadDialogVisible(!experimentDownloadDialogVisible)} className={`${isAiButtonDisabled ? 'disabled:true cursor-not-allowed':''}`}>Download AI completed</button>
          </div>
          <button className='bg-white text-gray-500 p-2 rounded-lg max-sm:w-full shadow-lg' onClick={downloadNormal}>{isDocxDownloading ? 'Please Wait...':'Download docx'}</button>
        </div> */}
    </section>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <p>&nbsp;</p>
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Experiment No.
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>
              <th scope="col" className="px-6 py-3">
                Ai Completed
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading && <LoadingDataForTable column={4}/>}
            {isLoading && <LoadingDataForTable column={4}/>}
            {!isLoading && expList !== null && expList.map((ele, index) => {
              return (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {index+1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {`Experiment No. ${ele.EXPERIMENT_NO}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <OutlineButton name={"Download"} icon={<FaDownload/>}/>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <OutlineButton name={"Download Ai Completed"} icon={<FaDownload/>}/>
                    </th>
                    

                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

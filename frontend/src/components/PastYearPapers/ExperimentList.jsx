import React, { useEffect, useState } from 'react'
import { ExperimentDownloadDialog } from './SubjectBar/ExperimentDownloadDialog'
import LoadingDataForTable from './SubjectBar/LoadingDataForTable';
import OutlineButton from '../Button/OutlineButton';
import { FaCrown, FaDownload } from "react-icons/fa";


export const ExperimentList = ({list}) => {
    const [experimentDownloadDialogVisible, setExperimentDownloadDialogVisible] = useState(false);


    const [isLoading, setIsLoading] = useState(true);
    const [expList, setExpList] = useState(null);
    const [experimentIdClicked, setExperimentIdClicked] = useState(null);




    const openDialogBox = (clickedExp)=>{
      setExperimentIdClicked(clickedExp);
      setExperimentDownloadDialogVisible(true);
    }

    const openUrl = (url)=>{
      window.open(url, '_blank');
    }

    useEffect(()=>{
      if(list !== null) {
        let explist = list.filter(obj => obj.TYPE === 'experiment');
        setExpList(explist);
        setIsLoading(false);
      }
    }, [list])

   
    
  return (
    <>
    {experimentDownloadDialogVisible && <section id='ExperimentDowloadDialog' className='absolute top-6 z-20'>
        <ExperimentDownloadDialog experiment={experimentIdClicked} setExperimentDownloadDialogVisible={setExperimentDownloadDialogVisible}/>
    </section>}




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
                <span className='flex gap-0.5 items-center'>
                  <span className='text-red-500'><FaCrown/></span> Ai Completed
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading && <LoadingDataForTable column={4}/>}
            {isLoading && <LoadingDataForTable column={4}/>}
            {!isLoading && expList !== null && expList.map((ele, index) => {
              return (
                ele.TYPE === 'experiment' && <>
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
                        {`${ele.NAME}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <span onClick={()=>openUrl(ele.URL)}><OutlineButton name={"Download"} icon={<FaDownload/>}/></span>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <span onClick={()=>openDialogBox(ele)}>
                          <OutlineButton name={"Download Ai Completed"} icon={<FaDownload/>}/>
                        </span>
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

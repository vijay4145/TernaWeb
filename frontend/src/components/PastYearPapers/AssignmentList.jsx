import React, { useEffect, useState } from 'react'
import { FaCrown, FaDownload } from "react-icons/fa";
import OutlineButton from '../Button/OutlineButton';
import LoadingDataForTable from './SubjectBar/LoadingDataForTable';


const AssignmentList = ({list}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [assignmentList, setAssignmentList] = useState(null);
    
    useEffect(()=>{
        if(list !== null) {
          let assignlist = list.filter(obj => obj.hasOwnProperty('ASSIGNMENT_NO'));
          setAssignmentList(assignlist);
          setIsLoading(false);
        }
      }, [list])

      const openUrl = (url)=>{
        window.open(url, '_blank');
      }
  return (
    <div>
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
                Assignment No.
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>

            </tr>
          </thead>

          <tbody>
            {isLoading && <LoadingDataForTable column={3}/>}
            {/* {isLoading && <LoadingDataForTable column={4}/>} */}
            {!isLoading && assignmentList !== null && assignmentList.map((ele, index) => {
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
                        {`Assignment No. ${ele.ASSIGNMENT_NO}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <span onClick={()=>openUrl(ele.URL)}><OutlineButton name={"Download"} icon={<FaDownload/>}/></span>
                    </th>
                    

                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AssignmentList

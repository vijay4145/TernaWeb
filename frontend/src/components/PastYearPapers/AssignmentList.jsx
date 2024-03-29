import React, { useEffect, useState } from 'react'
import { FaDownload } from "react-icons/fa";
import OutlineButton from '../Button/OutlineButton';
import LoadingDataForTable from './SubjectBar/LoadingDataForTable';


const AssignmentList = ({list, type}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [assignmentList, setAssignmentList] = useState(null);
    
    useEffect(()=>{
        if(list !== null) {
          let assignlist = list.filter(obj => obj.TYPE===type);
          setAssignmentList(assignlist);
          setIsLoading(false);
        }
      }, [])

      const openUrl = (url)=>{
        window.open(url, '_blank');
      }
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                        {index+1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                        {`${ele.NAME}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
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

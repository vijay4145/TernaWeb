import React, { useEffect, useState } from "react";
import LoadingDataForTable from "../PastYearPapers/SubjectBar/LoadingDataForTable";
import { getGfgUserData } from "../../http";
import { FaTrophy } from "react-icons/fa";
import './codersTab.css'

const GeeksForGeeks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(()=>{
    getGfgUserData().then(res=>{
      if(res.status === 200){
        setData(res.data);
        setIsLoading(false);
      }
    })
  },[])

  const openLink = (userhandle)=>{

  }

  return (
    <div>
      <p className="text-sm">
        *not seeing yourself, add college name as {" "}
        <span className="underline hover:text-purple-600 cursor-pointer">
          Terna Engineering College (TEC) Mumbai
        </span>
        &nbsp;in your gfg handle
      </p>
      <br/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-7">
                &nbsp;&nbsp;Rank
              </th>
              <th scope="col" className="px-6 py-3">
                &nbsp;&nbsp;Name
              </th>
              <th scope="col" className="px-6 py-3">
                Coding Score
              </th>
              <th scope="col" className="px-6 py-3">
              Total Problem solved
              </th>
            </tr>
          </thead>
          <tbody className="ranklist-color">
            {isLoading && <LoadingDataForTable column={5}/>}
            {isLoading && <LoadingDataForTable column={5}/>}
            {isLoading && <LoadingDataForTable column={5}/>}
            {isLoading && <LoadingDataForTable column={5}/>}
            {isLoading === false && data.map((ele, index) => {
            return (
              <tr onClick={()=>openLink(ele.handle)} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 cursor-pointer`}>
                  
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                      <span className="flex justify-center items-center gap-0.5">
                        {index < 3 &&<FaTrophy />}
                        {index+1}
                      </span>

                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white name"
                  >
                    {ele.handle}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                  >
                      {`${ele.coding_score}`}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                  >
                      {`${ele.total_problems_solved}`}
                  </th>
                </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeeksForGeeks;

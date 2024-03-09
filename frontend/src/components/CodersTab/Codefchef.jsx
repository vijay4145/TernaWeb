import React, { useEffect, useState } from "react";
import LoadingDataForTable from "../PastYearPapers/SubjectBar/LoadingDataForTable";
import { getCodechefUserData } from "../../http";
import { FaCrown, FaTrophy } from "react-icons/fa";
import './codersTab.css'

const Codefchef = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(()=>{
    // hit api get list of codechef account
    // setData
    // setIsLoading false
    getCodechefUserData().then(res=>{
      if(res.status === 200){
        setData(res.data);
        setIsLoading(false);
      }
    })
  })

  const openLink = (username)=>{
    const url = `https://www.codechef.com/users/${username}`;
    window.open(url, '_blank');
  }
  return (
    <div>
      <p>
        not seeing yourself{" "}
        <span className="underline hover:text-purple-600 cursor-pointer">
          add here
        </span>
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
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Global Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Country Rank
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
                <tr onClick={()=>openLink(ele.username)} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 cursor-pointer`}>
                    
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
                      <div dangerouslySetInnerHTML={{ __html: (ele.html_handle.replace(ele.username, ele.name))}}/>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                    >
                        {`${ele.rating}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                    >
                        {`${ele.global_rank}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                    >
                        {`${ele.country_rank}`}
                    </th>
                  </tr>
              )})}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Codefchef;

import React, { useEffect, useState } from "react";
import LoadingDataForTable from "../PastYearPapers/SubjectBar/LoadingDataForTable";
import { getCodechefUserData } from "../../http";
import { FaCrown, FaTrophy } from "react-icons/fa";
import './codersTab.css'

const Codefchef = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(()=>{
    getCodechefUserData().then(res=>{
      if(res.status === 200){
        setData(res.data);
        console.log(res.data);
        setIsLoading(false);
      }
    })
  },[])

  const openLink = (username)=>{
    const url = `https://www.codechef.com/users/${username}`;
    window.open(url, '_blank');
  }
  return (
    <div>
      <p className="text-sm">
        *not seeing yourself, add college name as {" "}
        <span className="underline hover:text-purple-600 cursor-pointer">
        Terna Engineering College, Nerul
        </span>
        &nbsp;in your codechef handle
      </p>
      <br/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                <tr onClick={()=>openLink(ele.username)} className={`bg-white border-b  hover:bg-gray-50  text-gray-900 cursor-pointer`}>
                    
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                        <span className="flex justify-center items-center gap-0.5">
                          {index < 3 &&<FaTrophy />}
                          {index+1}
                        </span>

                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap  name"
                    >
                      <div dangerouslySetInnerHTML={{ __html: (ele.html_handle.replace(ele.username, ele.name))}}/>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                        {`${ele.rating}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                        {`${ele.global_rank}`}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
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

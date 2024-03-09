import React, { useEffect, useState } from 'react'
import LoadingDataForTable from '../PastYearPapers/SubjectBar/LoadingDataForTable';
import { FaTrophy } from 'react-icons/fa';
import './codersTab.css';
import { getGithubUserData } from '../../http';
import AddGithubUser from './AddGithubUser';

const Github = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isAddGitUserDialogOpen, SetIsAddGitUserDialogOpen] = useState(false);
  useEffect(()=>{
    getGithubUserData().then(res=>{
      if(res.status === 200){
        setData(res.data);
        console.log(res.data);
        setIsLoading(false);
      }
    });
  },[])

  const openLink = (url)=>{
    window.open(url, '_blank');
  }


  return (
    <div>
    <p>
      not seeing yourself{" "}
      <span onClick={()=>SetIsAddGitUserDialogOpen(!isAddGitUserDialogOpen)} className="underline hover:text-purple-600 cursor-pointer">
        add here
      </span>
    </p>
    {isAddGitUserDialogOpen && <AddGithubUser SetIsAddGitUserDialogOpen={SetIsAddGitUserDialogOpen}/>}
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
              Total Commits
            </th>
            <th scope="col" className="px-6 py-3">
              Popularity (stars)
            </th>
            <th scope="col" className="px-6 py-3">
              Total Prs
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
              <tr onClick={()=>openLink(ele.link)} className={`bg-white border-b  hover:bg-gray-50  text-gray-900 cursor-pointer`}>
                  
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
                    {ele.name}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                      {`${ele.total_commits}`}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                      {`${ele.star_earned}`}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                      {`${ele.total_pull_request}`}
                  </th>
                </tr>
            )})}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Github

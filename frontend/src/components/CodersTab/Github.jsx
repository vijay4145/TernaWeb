import React, { useState } from 'react'
import LoadingDataForTable from '../PastYearPapers/SubjectBar/LoadingDataForTable';

const Github = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <p>not seeing yourself <span className='underline hover:text-purple-600 cursor-pointer'>add here</span></p> 
      <br/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                &nbsp;&nbsp;Institute Rank
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
          <tbody>
            {isLoading && <LoadingDataForTable column={5}/>}
            {isLoading && <LoadingDataForTable column={5}/>}
            {isLoading && <LoadingDataForTable column={5}/>}
            {isLoading && <LoadingDataForTable column={5}/>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Github

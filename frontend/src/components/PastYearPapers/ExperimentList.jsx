import React, { useEffect, useState } from 'react'
import { ExperimentDownloadDialog } from './SubjectBar/ExperimentDownloadDialog'
import LoadingDataForTable from './SubjectBar/LoadingDataForTable';
import OutlineButton from '../Button/OutlineButton';
import { FaCrown, FaDownload } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import { MySnackbar } from '../Home/MySnackbar';


export const ExperimentList = ({list}) => {
    const [experimentDownloadDialogVisible, setExperimentDownloadDialogVisible] = useState(false);
    const provider = new GoogleAuthProvider();

    const [isLoading, setIsLoading] = useState(true);
    const [expList, setExpList] = useState(null);
    const [experimentIdClicked, setExperimentIdClicked] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isOpen, setIsOpen] = useState(false);




    const openDialogBox = (clickedExp)=>{
      if(isLoggedIn === false){
        setIsOpen(true);
        var auth =  getAuth();
        signInWithRedirect(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
            // ...
            // console.log("error code is " + errorCode);
          });
      }else {
        setExperimentIdClicked(clickedExp);
        setExperimentDownloadDialogVisible(true);
      }
    }

    
    useEffect(()=>{
      onAuthStateChanged(getAuth(), async (user) => {
        if (user !== null) {
          setIsLoggedIn(true);
        }else{
          setIsLoggedIn(false);
        }
      })
    },[]);
    const openUrl = (url)=>{
      if(isLoggedIn === false){
        setIsOpen(true);
        var auth =  getAuth();
        signInWithRedirect(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
            // ...
            // console.log("error code is " + errorCode);
          });
      }
      else
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

      <MySnackbar isOpen={isOpen} setOpen={setIsOpen} msg={"Please Login To Download"} severity={"error"}/>




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
                <span className='flex gap-0.5 items-center'>
                  <span className='text-red-500'><FaCrown/></span> Ai Completed
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>
              
            </tr>
          </thead>

          <tbody>
            {(isLoading || isLoggedIn === null) && <LoadingDataForTable column={4}/>}
            {(isLoading || isLoggedIn === null) && <LoadingDataForTable column={4}/>}
            {!isLoading && isLoggedIn !== null && expList !== null && expList.map((ele, index) => {
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
                        <span onClick={()=>openDialogBox(ele)}>
                          <OutlineButton name={"Download Ai Completed"} icon={<FaDownload/>}/>
                        </span>
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
    </>
  )
}

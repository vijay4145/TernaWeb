import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { newgithubuserAdd } from '../../http';
import { MySnackbar } from '../Home/MySnackbar';
import loading_animation from '../../lottie_animation/loading_animation_2.json';
import Lottie from 'lottie-react';


const AddGithubUser = ({SetIsAddGitUserDialogOpen}) => {
    const [username, setUsername] = useState('');
    const [link, setlink] = useState('');
    const [isFormCompleted, setIsFormCompleted] = useState(null);
    const [isValidLink, setIsValidLink] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isFormSubmissionInProgress, setIsFormSubmissionInProgress] = useState(false);
    const handleFormSubmit = ()=>{
        if(isFormCompleted && isValidLink){
            setIsFormSubmissionInProgress(true);
            const data = {
                name : username, link
            }
            console.log(data);
            newgithubuserAdd(data).then(res=>{
                console.log(res);
                setIsOpen(true);
                setTimeout(() => {
                    SetIsAddGitUserDialogOpen(false);
                }, 1000);
            });
        }
    }

    useEffect(()=>{
        if(username !== null && link !== null && username !== '' && link !== '' && isValidLink)
            setIsFormCompleted(true);
        else setIsFormCompleted(false);
    }, [username, link])

    useEffect(()=>{
        const testUrl = (str)=>{
            const regex = /^(https?:\/\/)?(www\.)?github\.com\//;
            return regex.test(str);
        }
        if(link !== null && link !== '' && testUrl(link) === false) setIsValidLink(false);
        else setIsValidLink(true);
    }, [link])
  return (
      <div className={`${isFormSubmissionInProgress ? 'cursor-progress':''}`}>
        {isFormSubmissionInProgress && <Lottie className='h-24 w-32 absolute' animationData={loading_animation} autoPlay={true}/>}
        <MySnackbar isOpen={isOpen} setOpen={setIsOpen} msg={'Added Succesfully will reflect data within one day'} severity={'success'} />
        <br/>
       <div className={`flex flex-wrap gap-4 w-full ${isFormSubmissionInProgress ? 'blur-md':''}`} >
          <div id="branch" className="relative z-0">
          <TextField
          required
          onChange={(e)=>{setUsername(e.target.value)}}
          id="outlined-required"
          label="name"
          defaultValue=""/>
          </div>
          <div id="branch" className=" relative z-0">
          <TextField
          required
          onChange={(e)=>{setlink(e.target.value)}}
          id="outlined-required"
          label="Github Link"
          defaultValue=""/>
          {isValidLink === false && <p className='absolute text-xs text-red-600'>*Not a valid github link</p>}
          </div>
          <div id="branch" className="relative z-0 ">
            <button onClick={handleFormSubmit} className={`border h-full px-4 border-black ${isFormCompleted ?  'bg-purple-700 text-white':'cursor-not-allowed bg-purple-200'}`}>Add</button>
          </div>

          </div>
    </div>
  )
}

export default AddGithubUser

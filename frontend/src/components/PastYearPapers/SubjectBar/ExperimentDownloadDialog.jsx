import React, { useState } from "react";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import {
  AiOutlineUser,
  AiOutlineFieldNumber,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { useEffect } from "react";
import { getAiExperimentUrl } from "../../../http";
import loading_animation from '../../../lottie_animation/loading_animation_2.json';
import Lottie from 'lottie-react';


export const ExperimentDownloadDialog = (props) => {
  const [user_name, setUser_name] = useState('');
  const [roll_no, setRoll_no] = useState('');
  const [batch, setBatch] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    checkAllValueIsFilled();
  }, [user_name])
  useEffect(() => {
    checkAllValueIsFilled();
  }, [roll_no])
  useEffect(() => {
    checkAllValueIsFilled();
  }, [batch])

  const checkAllValueIsFilled = ()=>{
    if(user_name && roll_no && batch && user_name !== null && roll_no !== null && batch !== null && user_name !== '' && roll_no !== '' && batch !== ''){
      setIsFormFilled(true)
    }else setIsFormFilled(false)
  }


  const getDownloadLink = ()=>{
    if(isFormFilled){
      setIsLoading(true);
      let detail = {
        _id: props.exp._id,
        SUBJECT: props.currSubject,
        EXPERIMENT_NO: props.exp.EXPERIMENT_NO,
        NAME: user_name,
        BATCH: batch,
        ROLL_NO: roll_no
      }
      getAiExperimentUrl(detail).then(res=>{
        setIsLoading(false);
        window.open(res.data.url, '_blank');
      }).catch(err=>{
        setIsLoading(false);
        console.log(err);
      })
    }
  }


  const closeForm = ()=>{
    props.setExperimentDownloadDialogVisible(false);
  }
  
  
  
  return (
    <>

      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        {isLoading === true && <section id='loading' className={`${isLoading ? '':'hidden'} top-0 max-w-md`}>
          <Lottie animationData={loading_animation} />
        </section>}
        {isLoading === false && <div className="bg-white p-4  rounded-xl shadow-lg gap-4 flex flex-col">
          <div className="flex justify-end w-full" onClick={closeForm}>
            <AiOutlineCloseSquare className="h-5 w-5 text-red-400" />
          </div>
          <h1 className="text-lg text-green-600">
            Please Fill the form to get AI completed experiment
          </h1>

          <div id="userName" className="">
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                required
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <AiOutlineUser />
                  </InputAdornment>
                }
                label="Email"
              />
            </FormControl>
          </div>

          <div id="roll_no" className="">
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Roll No
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                required
                value={roll_no}
                onChange={(e) => setRoll_no(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <AiOutlineFieldNumber />
                  </InputAdornment>
                }
                label="Roll No"
              />
            </FormControl>
          </div>

          <div id="Batch" className="">
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Batch
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                required
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <SiGoogleclassroom />
                  </InputAdornment>
                }
                label="Batch"
              />
            </FormControl>
          </div>
          <div className="flex flex-wrap justify-center">
            <button onClick={getDownloadLink} className={`${isFormFilled ? 'bg-blue-500':'bg-blue-300'} px-3 py-2 text-white rounded-lg`}>
              {isLoading ? 'Please Wait...':'Download'}
            </button>
          </div>
        </div>}
      </div>
    </>
  );
};

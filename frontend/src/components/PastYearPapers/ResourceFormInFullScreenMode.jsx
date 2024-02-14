import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { getAvailableAssignment } from '../../http/index';

const ResourceFormInFullScreenMode = () => {
    const [branch, setBranch] = useState(null);
    const [semester, setSemester] = useState(null);
    const [subject, setSubject] = useState(null);
  
    const [optionsFromApi, setoptionsFromApi] = useState(null);
    const [availableBranches, setavailableBranches] = useState(['-']);
    const [availableSemester, setavailableSemester] = useState(['-']);
    const [availableSubject, setavailableSubject] = useState(['-']);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Perform any validation if needed
      // For now, just logging form data
      // console.log(formData);
  
      // Redirect to a specific route with parameters
      const url = `/resource/download-experiment?branch=${branch}&semester=${semester}&subject=${subject}`;
      window.location.href = url;
    };
  
    useEffect(()=>{
      if(optionsFromApi !== null && branch !== null){
        let newoptions = ['-'];
        for(let sem in optionsFromApi[branch])
          newoptions.push(sem);
        setavailableSemester(newoptions)
      }
    }, [branch]);
  
    useEffect(()=>{
      if(optionsFromApi !== null && branch !== null && semester !== null){
        let newoptions = ['-'];
        optionsFromApi[branch][semester].forEach(element => {
          newoptions.push(element);
        })
        setavailableSubject(newoptions);
      }
    }, [semester]);
  
    useEffect(()=>{
      getAvailableAssignment().then((res)=>{
        setoptionsFromApi(res.data);
        if(res.status == 200){
          let brancht = ["-"];
          for(let branch in res.data){
            brancht.push(branch);
          }
          setavailableBranches(brancht);
        }else{
          // TODO : ADD SNACKDOWN OF INTERNAL SERVER ERROR
        }
      }).catch(err=>{
  
      })
      
    }, [])
  
    AOS.init({
      offset: 20,
    });
  return (
    <>
      <div
        data-aos="fade-down"
        className={`md:w-[100%] max-w-2xl md:right-3 flex bg-white z-10 px-5 py-3 rounded-xl flex-col gap-5 transition-all ease-in-out shadow-lg `}
      >
        <div className="flex flex-row items-center w-full justify-between">
          <h5 className="text-xl">Download Assignment & Experiments</h5>

        </div>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleFormSubmit}>
          <div id="branch" className="relative z-0">
            <Autocomplete
              fullWidth
              value={branch === null ? "-" : branch}
              onChange={(_, v) => setBranch(v)}
              options={availableBranches}
              clearOnEscape
              renderInput={(params) => (
                <div>
                  <TextField
                    name="branch"
                    value={branch}
                    required
                    {...params}
                    label="Branch"
                    fullWidth
                  />
                </div>
              )}
            />
          </div>
          <div id="semester" className="relative z-0">
            <Autocomplete
              fullWidth
              value={semester === null ? "-" : semester}
              onChange={(_, v) => setSemester(v)}
              options={availableSemester}
              clearOnEscape
              renderInput={(params) => (
                <div>
                  <TextField
                    name="semester"
                    value={semester}
                    required
                    {...params}
                    label="Semester"
                    fullWidth
                  />
                </div>
              )}
            />
          </div>

          <div id="subject" className="relative z-0">
            <Autocomplete
              fullWidth
              value={subject === null ? "-" : subject}
              onChange={(_, v) => setSubject(v)}
              options={availableSubject}
              clearOnEscape
              renderInput={(params) => (
                <div>
                  <TextField
                    name="subject"
                    value={subject}
                    required
                    {...params}
                    label="Subject"
                    fullWidth
                  />
                </div>
              )}
            />
          </div>
          <button
            type="submit"
            className="max-w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2"
          >
            Search
          </button>
        </form>
      </div>
  </>
  )
}

export default ResourceFormInFullScreenMode

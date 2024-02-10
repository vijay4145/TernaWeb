import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { getbranchList } from '../http/index.js';

export const AssignmentForm = (props) => {
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const [subject, setSubject] = useState(null);

  const availableBranches = [
    "-",
    "computer-engineering",
  ];
  const availableSubject = ["-","spcc"];
  const availableSemester = ["-","1", "2", "3", "4", "5", "6", "7", "8"];
  useEffect(() => {
    props.setProgress(100);
  }, []);

  // useEffect(async ()=>{
  //   // const branchList = await getbranchList();
  //   // console.log(branchList);
  //   // setBranch(branchList);
    
  // }, [])

  AOS.init({
    offset: 20,
  });
  return (
    <>
      {props.isAssignmentDialogboxOpen && (
        <div
          data-aos="fade-down"
          className={`w-[100%] max-w-xl absolute flex bg-white z-10 px-5 py-3 rounded-xl flex-col gap-5 transition-all ease-in-out shadow-lg `}
        >
          <div className="flex flex-row items-center w-full justify-between">
            <h5 className="text-xl">Download Assignment & Experiments</h5>
            <span>
              <FaRegWindowClose
                onClick={() => props.setIsAssignmentDialogboxOpen(false)}
                className="text-red-600 hover:text-white hover:bg-red-600 h-5 w-5"
              />
            </span>
          </div>
          <form className="flex flex-col gap-4 w-full">
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
      )}
    </>
  );
};

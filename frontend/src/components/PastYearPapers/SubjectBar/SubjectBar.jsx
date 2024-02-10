import React from "react";
import {
  Autocomplete,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const SubjectBar = () => {
  const [branch, setBranch] = useState(null);
  const [option, setOption] = useState(null);
  const [semester, setSemester] = useState(null);
  const [subject, setSubject] = useState(null);
  const availableBranches = [
    "computer-engineering",
    "mechanical-engineering",
    "electonics-engineering",
    "information-technology",
  ];
  const availableoption = [
    "Download Experiment",
    "Download Assignment",
    "Past Year Paper",
    "Books"
  ]

  const availableSubject = [
    "subject1"
  ]

  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url_branch = searchParams.get('branch');
    const url_semester = searchParams.get('semester');
    if(url_branch) setBranch(url_branch);
    if(url_semester) setSemester(url_semester);
  }, [location])
  
  const availableSemester = ['1','2','3','4','5','6','7','8'];
  
  return (
    <>
      <form className="flex flex-col gap-4 ">
            <div id="option" className="relative z-0">
              <Autocomplete
                fullWidth
                value={option === null ? "-" : option}
                onChange={(_, v) => setOption(v)}
                options={availableoption}
                clearOnEscape
                renderInput={(params) => (
                  <div>
                    <TextField
                      name="option"
                      value={option}
                      required
                      {...params}
                      label="Option"
                      fullWidth
                    />
                  </div>
                )}
              />
            </div>
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

            <button type="submit" className="max-w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2">Search</button>
      </form>
    </>
  );
};

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
  const [semester, setSemester] = useState(null);
  const availableBranches = [
    "computer-engineering",
    "mechanical-engineering",
    "electonics-engineering",
    "information-technology",
  ];

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
      <form className="grid md:grid-cols-3 gap-3 ">
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

            <button type="submit" className="max-w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2">Search</button>
      </form>
    </>
  );
};

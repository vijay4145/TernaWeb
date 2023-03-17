import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBranchSemesterSlice } from "../../../store/SelectedBranchSemester";
import './sidebar.css'

export const BranchButton = (props) => {
    const semester = ['1','2','3','4','5','6','7','8'];
  let {BRANCH, SEMESTER} = useSelector((state)=>state.SelectedBranchSemesterSlice);
  useEffect(() => {
    if(props.branch === BRANCH) setisCurrBranchSelected(true);
    else setisCurrBranchSelected(false)
  }, [SEMESTER])
  
    const dispatch = useDispatch();
    const [isCurrBranchSelected, setisCurrBranchSelected] = useState(false);
    const [SemesterSelected, setSemesterSelected] = useState(null);
    const [questionPaper, setQuestionPaper] = useState(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const qp = searchParams.get('questionPaper');
        setQuestionPaper(qp);
        // semest
        if(qp != null){
            setSemesterSelected(qp.split('/')[1]);
            if(qp.split('/')[0] === props.branch) setisCurrBranchSelected(true);
        }else if(BRANCH && SEMESTER){
          if(props.branch === BRANCH) setisCurrBranchSelected(true);
          setSemesterSelected(SEMESTER);
        }
    }, []);

    const setSemester = (sem)=>{
      setSemesterSelected(sem); setisCurrBranchSelected(true);
      dispatch(setSelectedBranchSemesterSlice({
        BRANCH: props.branch,
        SEMESTER: sem
      }))
    }

    
  return (
    <>
      <div >
        <button type="button" 
        className={`${isCurrBranchSelected ? 'bg-blue-500':''} ${isCurrBranchSelected ? "text-white":"text-gray-500"} w-full branch-name-text text-lg hover:bg-blue-400 p-4 rounded-lg hover:text-white hover:shadow-lg shadow-md font-semibold`}>
          {" "}
          {props.branch}
        </button>
        <div className={`semester-dropdown bg-slate-50 rounded gap-2 overflow-hidden ${isCurrBranchSelected ? 'max-h-full':'max-h-0'}`}>
            {semester.map((sem,i)=>{
                return <button type="button" onClick={()=>setSemester(sem)} name="questionPaper" value={props.branch+'/'+sem} className={`${(SemesterSelected === sem && isCurrBranchSelected) ? 'bg-blue-100':''} hover:bg-blue-50 rounded-xl p-2 w-full`}>
                  Semester {sem
                  }</button>
            })}
        </div>
      </div>
    </>
  );
};

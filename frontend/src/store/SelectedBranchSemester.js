import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    BRANCH: null,
    SEMESTER: null
}


export const selectedBranchSemesterSlice = createSlice({
    name: "SelectedBranchSemesterSlice",
    initialState,
    reducers: {
      setSelectedBranchSemesterSlice: (state, action) => {
        console.log(state.payload);
        if(action.payload.BRANCH !== null) state.BRANCH = action.payload.BRANCH;
        if(action.payload.SEMESTER !== null) state.SEMESTER = action.payload.SEMESTER;
        ;
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setSelectedBranchSemesterSlice } = selectedBranchSemesterSlice.actions;
  
  export default selectedBranchSemesterSlice.reducer;
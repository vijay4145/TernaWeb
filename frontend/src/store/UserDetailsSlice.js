import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    USER_EMAIL : 'guestUser@ternaweb.com',
    USER_NAME : 'guest User42',
    TAGS : [],
    LINKS : [],
    PROFILE_PIC_URL : 'no-url'
}


export const userDetailsSlice = createSlice({
    name: "UserDetailsSlice",
    initialState,
    reducers: {
      setUserDetailsSlice: (state, action) => {
        if(action.payload.USER_EMAIL !== null) state.USER_EMAIL = action.payload.USER_EMAIL;
        if(action.payload.USER_NAME !== null) state.USER_NAME = action.payload.USER_NAME;
        if(action.payload.TAGS !== null) state.TAGS = action.payload.TAGS;
        if(action.payload.LINKS !== null) state.LINKS = action.payload.LINKS;
        if(action.payload.PROFILE_PIC_URL !== null) state.PROFILE_PIC_URL = action.payload.PROFILE_PIC_URL;
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setUserDetailsSlice } = userDetailsSlice.actions;
  
  export default userDetailsSlice.reducer;
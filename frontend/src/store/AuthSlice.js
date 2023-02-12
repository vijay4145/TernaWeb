import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      const { authToken } = action.payload;
      state.authToken = authToken;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setAuth,setOtp } = authSlice.actions;

export default authSlice.reducer;

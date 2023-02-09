import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // tempuser : {
        userName: "",
        age: "",
        target_location: "",
        interests : "",
        lookingFor : "",
    // }
};

export const userDetailsSlice = createSlice({
  name: "UserDetailSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const {userdto, age_var, target_locationvar, interests_var, lookingFor_var} = action.payload;
      state.userName = userdto;
      state.age = age_var;
      state.target_location = target_locationvar;
      state.interests = interests_var;
      state.lookingFor = lookingFor_var;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;

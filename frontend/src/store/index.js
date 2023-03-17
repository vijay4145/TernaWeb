import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice";
import EventSlice from "./EventSlice";
import UserDetailsSlice from "./UserDetailsSlice";
import SelectedBranchSemesterSlice from "./SelectedBranchSemester";

export const store = configureStore({
  reducer: {
    auth,
    UserDetailsSlice,
    EventSlice,
    SelectedBranchSemesterSlice
  },
});

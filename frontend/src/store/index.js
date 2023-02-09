import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice";
import UserDetailSlice from "./UserDetailSlice";
import EventSlice from "./EventSlice";

export const store = configureStore({
  reducer: {
    auth,
    UserDetailSlice,
    EventSlice
  },
});

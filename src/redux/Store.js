import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/AuthSlice";
import userReducer from "../redux/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
        users: userReducer,
  },
});

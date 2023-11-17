import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "../Pages/Dashboard/Home/MemberSlice";
import userReducer from "./slices/UserSllice";
export const store = configureStore({
  reducer: {
    member: memberReducer,
    user: userReducer,
  },
});

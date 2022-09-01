import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "../Screens/Index/indexSlice";
import profileReducer from "../Screens/Profile/profileSlice";

export default configureStore({
  reducer: {
    index: indexReducer,
    profile: profileReducer,
  },
});

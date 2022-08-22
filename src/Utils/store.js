import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "../Screens/indexSlice";

export default configureStore({
  reducer: {
    index: indexReducer,
  },
});

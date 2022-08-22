import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "home",
};

export const indexSlice = createSlice({
  name: "index",
  initialState: initialState,
  reducers: {
    setScreen(state, action) {
      state.screen = action.payload;
    },
  },
});

export const { setScreen } = indexSlice.actions;

export default indexSlice.reducer;

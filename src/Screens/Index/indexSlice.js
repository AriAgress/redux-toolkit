import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "home",
  modalVisible: false,
};

export const indexSlice = createSlice({
  name: "index",
  initialState: initialState,
  reducers: {
    setScreen(state, action) {
      state.screen = action.payload;
    },
    toggleModal(state) {
      state.modalVisible = !state.modalVisible;
    },
  },
});

export const { setScreen, toggleModal } = indexSlice.actions;

export default indexSlice.reducer;

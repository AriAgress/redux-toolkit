import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: ["first comment"],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    addComment(state, action) {
      let addedComment = [...state.comments, action.payload];
      state.comments = addedComment;
    },
  },
});

export const { addComment } = profileSlice.actions;

export default profileSlice.reducer;

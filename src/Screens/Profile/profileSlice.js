import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // comments: ["first comment"],
  id: 0,
  comments: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    addComment(state, action) {
      const addComment = {
        id: state.id + 1,
        text: action.payload,
      };
      state.id += 1;
      state.comments.push(addComment);
    },
    deleteComment(state, action) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    editComment(state, action) {
      if (action.payload && action.payload.id) {
        const editIndex = state.comments.findIndex(
          (comments) => comments.id === action.payload.id
        );
        state.comments[editIndex].text = action.payload.text;
      }
    },
  },
});

export const { addComment, deleteComment, editComment } = profileSlice.actions;

export default profileSlice.reducer;

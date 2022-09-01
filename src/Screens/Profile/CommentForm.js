import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../Profile/profileSlice";
import { toggleModal } from "../Index/indexSlice";

const CommentForm = () => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addComment(newComment));
    dispatch(toggleModal(false));
  };

  return (
    <div>
      <h1>Comment Form</h1>
      <input
        type="text"
        placeholder="Add your comment"
        value={newComment}
        onChange={(text) => setNewComment(text.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default CommentForm;

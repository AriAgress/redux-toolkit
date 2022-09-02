import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../Profile/profileSlice";

const Comment = ({ text, id }) => {
  // const [edit, setEdit] = useState("");
  const [editInput, setEditInput] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => dispatch(deleteComment(id))}>X</button>
      <button onClick={() => setEditInput(!editInput)}>Update</button>
      {editInput && <input />}
    </div>
  );
};

export default Comment;

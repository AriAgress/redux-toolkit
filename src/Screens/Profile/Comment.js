import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../Profile/profileSlice";

const Comment = ({ text, id }) => {
  const [editInput, setEditInput] = useState(false);
  const [edit, setEdit] = useState(text);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setEdit(e.target.value);
  };

  const submitEdit = () => {
    dispatch(editComment({ id, text: edit }));
    setEditInput(false);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => dispatch(deleteComment(id))}>X</button>
      <button onClick={() => setEditInput(!editInput)}>Update</button>
      {editInput && (
        <div>
          <input onChange={onChange} value={edit} />{" "}
          <button onClick={submitEdit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Comment;

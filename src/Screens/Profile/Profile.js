import React, { useState } from "react";
import Modal from "../../commons/Modal";
import Comment from "./Comment";
import { toggleModal } from "../Index/indexSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../Profile/profileSlice";

const Profile = () => {
  // const [edit, setEdit] = useState("");
  const [editInput, setEditInput] = useState(false);
  const modalVisible = useSelector((state) => state.index.modalVisible);
  const comments = useSelector((state) => state.profile.comments);
  const dispatch = useDispatch();

  // const update = () => {};

  // const deleteComment = () => {
  //   for (let i = 0; i < comments.length; i++) {
  //     const object = comments[i];
  //     if (object[i] === comments[i]) {
  //       comments.splice(i, 1);
  //     }
  //   }
  // };

  // console.log("modal", id);

  return (
    <>
      <h1>Profile Screen</h1>
      {/* <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <button onClick={() => dispatch(deleteComment(comment.id))}>
              X
            </button>
            <button onClick={() => setEditInput(!editInput)}>Update</button>
            {editInput && <input />}
          </div>
        ))}
      </div> */}
      <div>
        {comments.map((c, index) => (
          <Comment key={index} text={c.text} id={c.id} />
        ))}
      </div>
      <button onClick={() => dispatch(toggleModal())}>Add Comment</button>
      {modalVisible && <Modal />}
    </>
  );
};

export default Profile;

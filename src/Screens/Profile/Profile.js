import React from "react";
import Modal from "../../commons/Modal";
import Comment from "./Comment";
import { toggleModal } from "../Index/indexSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const modalVisible = useSelector((state) => state.index.modalVisible);
  const comments = useSelector((state) => state.profile.comments);
  const dispatch = useDispatch();

  // const update = () => {};

  return (
    <>
      <h1>Profile Screen</h1>
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

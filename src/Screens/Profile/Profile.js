import Modal from "../../commons/Modal";
import { toggleModal } from "../Index/indexSlice";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./profileSlice";

const Profile = () => {
  const modalVisible = useSelector((state) => state.index.modalVisible);
  const comments = useSelector((state) => state.profile.comments);
  const dispatch = useDispatch();

  const deleteComment = () => {
    for (let i = 0; i < comments.length; i++) {
      const object = comments[i];
      if (object[i] === comments[i]) {
        comments.splice(i, 1);
      }
    }
  };

  console.log("modal", modalVisible);

  return (
    <>
      <h1>Profile Screen</h1>
      <div>
        {comments.map((comment, index) => (
          <p key={index}>
            {comment}
            <button onClick={deleteComment()}>X</button>
          </p>
        ))}
      </div>
      <button onClick={() => dispatch(toggleModal())}>Add Comment</button>
      {modalVisible && <Modal />}
    </>
  );
};

export default Profile;

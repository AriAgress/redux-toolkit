import Modal from "../commons/Modal";
import { toggleModal } from "./indexSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const modalVisible = useSelector((state) => state.index.modalVisible);
  const dispatch = useDispatch();

  console.log("modal", modalVisible);

  return (
    <>
      <h1>Profile Screen</h1>
      <div>Hi</div>
      <button onClick={() => dispatch(toggleModal())}>Add Comment</button>
      {modalVisible && <Modal />}
    </>
  );
};

export default Profile;

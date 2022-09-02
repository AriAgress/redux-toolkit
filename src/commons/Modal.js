import React from "react";
import { toggleModal } from "../Screens/Index/indexSlice";
import { useDispatch } from "react-redux";
import CommentForm from "../Screens/Profile/CommentForm";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const closeModal = (event) => {
    event.stopPropagation();
    dispatch(toggleModal());
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            X
          </button>
          {children}
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;

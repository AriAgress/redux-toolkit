import React from "react";
import { toggleModal } from "../Screens/indexSlice";
import { useDispatch } from "react-redux";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const closeModal = (event) => {
    event.stopPropagation();
    dispatch(toggleModal());
  };

  return (
    <>
      <div
        className="modal-container"
        onClick={closeModal}
        style={{ backgroundColor: "black", height: "200px", width: "200px" }}>
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;

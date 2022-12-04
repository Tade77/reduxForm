import React from "react";

const Modal = ({ closeModal, handleSubmit }) => {
  console.log(handleSubmit);
  return (
    <div className="modalBg">
      <div className="modal">
        <div className="btn--x">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to submit</h1>
        </div>
        <div className="body">
          <p>click the button</p>
        </div>
        <div className="footer">
          <button className="cancel--btn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className="submit--btn" handleSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

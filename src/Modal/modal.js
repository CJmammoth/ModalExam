import React, { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState(
    "Are you sure you want to cancel your subscription?"
  );
  const [showButton, setShowButton] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [buttonText, setButtonText] = useState("Cancel");

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const changeContent = () => {
    setContent("Subscription successfully cancelled!");
    setShowButton(false);
    setTimeout(toggleModal, 2000);
    setButtonText("Cancelled");
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {buttonText}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <p>{content}</p>
            {showButton && (
              <>
                <button onClick={toggleModal}>No</button>
                <button className="Yes-modal" onClick={() => changeContent()}>
                  Yes - Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

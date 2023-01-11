import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ModalPractical = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <h1>
        React Modal Practical
        <br />
        <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "grey",
            },
            content: {
              color: "orange",
            },
          }}
        >
          <h2>Modal title</h2>
          <p>Modal body</p>
          <button onClick={() => setModalIsOpen(false)}>close modal</button>
        </Modal>
      </h1>
    </div>
  );
};

export default ModalPractical;

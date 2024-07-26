import Modal from "react-modal";

import s from "./ModalWindow.module.scss";
import { PropModal } from "./ModalWindow.types";
import { useEffect } from "react";

const ModalWindow = ({ children, isOpen, closeModal }: PropModal) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no_scroll");
    }
    if (!isOpen) {
      document.body.classList.remove("no_scroll");
    }
  }, [isOpen]);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className=" fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[541px] overflow-hidden py-[150px]  "
        closeTimeoutMS={0}
        overlayClassName={s.overlay}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalWindow;

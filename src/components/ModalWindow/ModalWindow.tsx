import Modal from "react-modal";

import s from "./ModalWindow.module.scss";
import { PropModal } from "./ModalWindow.types";

const ModalWindow = ({ children, isOpen, closeModal }: PropModal) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className=" relative w-[100%] h-[100%] translate-y-[150px] transition-transform duration-300 ease-in-out "
        closeTimeoutMS={300}
        overlayClassName={s.overlay}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalWindow;

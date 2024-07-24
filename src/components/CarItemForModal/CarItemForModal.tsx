import CloseModalBtn from "../Icons/CloseModalBtn";
import { CarForModal } from "./CarItemForModal.types";

const CarItemForModal = ({ car, handleCloseModal }: CarForModal) => {
  return (
    <div>
      <button onClick={handleCloseModal}>
        <CloseModalBtn />
      </button>
      <img src={car?.img} alt={car?.model} />
    </div>
  );
};

export default CarItemForModal;

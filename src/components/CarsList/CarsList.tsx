import { useDispatch, useSelector } from "react-redux";
import CarItem from "../CarItem/CarItem";
import { PropCars } from "./CarsList.types";

import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import CarItemForModal from "../CarItemForModal/CarItemForModal";
import { selectedCarForModal } from "../../redux/cars/selectors";

const CarList = ({ cars }: PropCars) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCar = useSelector(selectedCarForModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ul className="grid grid-cols-4 gap-x-[29px] gap-y-[50px] mb-[100px]">
        {cars.map((car) => (
          <CarItem car={car} setIsOpen={setIsOpen} key={car.id} />
        ))}
      </ul>
      <ModalWindow isOpen={isOpen} closeModal={handleCloseModal}>
        <CarItemForModal
          car={selectedCar}
          handleCloseModal={handleCloseModal}
        />
      </ModalWindow>
    </>
  );
};

export default CarList;

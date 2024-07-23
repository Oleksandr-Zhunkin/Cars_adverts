import CarItem from "../CarItem/CarItem";
import { PropCars } from "./CarsList.types";

const CarList = ({ cars }: PropCars) => {
  return (
    <ul className="grid grid-cols-4 gap-x-[29px] gap-y-[50px] mb-[100px]">
      {cars.map((car) => (
        <CarItem car={car} />
      ))}
    </ul>
  );
};

export default CarList;

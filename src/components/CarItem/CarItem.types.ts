import { Car } from "../../types/types";

export type PropCar = {
  setIsOpen: (value: boolean) => void;
  car: Car;
};

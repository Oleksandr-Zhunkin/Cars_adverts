import { Car } from "../../types/types";

export interface CarForModal {
  car: Car | null;
  handleCloseModal: () => void;
}

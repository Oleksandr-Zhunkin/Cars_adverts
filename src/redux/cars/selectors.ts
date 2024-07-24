import { Car } from "../../types/types";
import { RootState } from "./../store";

export const selectCars = (state: RootState) => state.rootReducer.cars.cars;

export const selectFavoriteCars = (state: RootState) =>
  state.rootReducer.cars.favorite;

export const selectPage = (state: RootState): number =>
  state.rootReducer.cars.page;

export const selectLoadBtn = (state: RootState): boolean =>
  state.rootReducer.cars.isLoadBtn;

export const selectedCarForModal = (state: RootState): Car | null =>
  state.rootReducer.cars.selectedCar;

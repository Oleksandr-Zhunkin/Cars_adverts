import { RootState } from "./../store";

export const selectCars = (state: RootState) => state.rootReducer.cars.cars;

export const selectPage = (state: RootState) => state.rootReducer.cars.page;

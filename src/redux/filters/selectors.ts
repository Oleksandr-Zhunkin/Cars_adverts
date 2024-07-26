import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectBrands = (state: RootState) =>
  state.rootReducer.filters.brands;
export const selectPrices = (state: RootState) =>
  state.rootReducer.filters.prices;
export const selectAllCars = (state: RootState) =>
  state.rootReducer.filters.allCars;
export const selectSearchBrand = (state: RootState) =>
  state.rootReducer.filters.filters.brand;
export const selectPricePerHour = (state: RootState) =>
  state.rootReducer.filters.filters.pricePerHour;
export const selectMinRun = (state: RootState) =>
  state.rootReducer.filters.filters.minRun;
export const selectMaxRun = (state: RootState) =>
  state.rootReducer.filters.filters.maxRun;

export const selectFilteredCars = createSelector(
  [
    selectAllCars,
    selectSearchBrand,
    selectPricePerHour,
    selectMinRun,
    selectMaxRun,
  ],
  (cars, brand, price, minRun, maxRun) => {
    return cars?.filter((car) => {
      const brandFilter =
        !brand || car.make.toLowerCase().includes(brand.toLowerCase());
      const priceFilter =
        !price || Number(car.rentalPrice?.slice(1)) <= Number(price);
      const minFilter = !minRun || car.mileage >= Number(minRun);
      const maxFilter = !maxRun || car.mileage <= Number(maxRun);

      return brandFilter && priceFilter && minFilter && maxFilter;
    });
  }
);

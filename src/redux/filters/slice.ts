import { createSlice } from "@reduxjs/toolkit";
import { filtersDataThunk } from "./operations";
import { Car, FiltersState } from "../../types/types";

const initialState: FiltersState = {
  filters: {
    brand: "",
    pricePerHour: null,
    minRun: null,
    maxRun: null,
  },
  allCars: [],
  brands: [],
  prices: [],
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchForBrand(state, action) {
      state.filters.brand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filtersDataThunk.fulfilled, (state, action) => {
      state.allCars = action.payload;
      const allBrands = state.allCars.map((car: Car) => car.make);
      const allPrices = state.allCars.map((car: Car) => car.rentalPrice);
      state.brands = allBrands.filter(
        (item: string, index: number) => allBrands.indexOf(item) === index
      );
      state.prices = allPrices.filter(
        (item: string, index: number) => allPrices.indexOf(item) === index
      );
    });
  },
});

export const { searchForBrand } = slice.actions;
export const filtersSlice = slice.reducer;

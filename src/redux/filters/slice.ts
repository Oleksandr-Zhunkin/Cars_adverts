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
    searchForPrice(state, action) {
      state.filters.pricePerHour = action.payload;
    },
    searchForMinRun(state, action) {
      state.filters.minRun = action.payload;
    },
    searchForMaxRun(state, action) {
      state.filters.maxRun = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filtersDataThunk.fulfilled, (state, action) => {
      state.allCars = action.payload;
      const allBrands = state.allCars.map((car: Car) => car.make);
      const allPrices = state.allCars.map((car: Car) =>
        Number(car.rentalPrice.slice(1))
      );
      state.brands = allBrands.filter(
        (item: string, index: number) => allBrands.indexOf(item) === index
      );
      state.prices = allPrices.filter(
        (item: number, index: number) => allPrices.indexOf(item) === index
      );
    });
  },
});

export const {
  searchForBrand,
  searchForPrice,
  searchForMinRun,
  searchForMaxRun,
} = slice.actions;
export const filtersSlice = slice.reducer;

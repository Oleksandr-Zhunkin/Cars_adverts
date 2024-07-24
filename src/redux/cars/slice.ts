import { createSlice } from "@reduxjs/toolkit";
import { carsThunk } from "./operations";
import { CarsState } from "../../types/types";

const initialState: CarsState = {
  cars: [],
  favorite: [],
  page: 1,
  selectedCar: null,
  isLoadBtn: true,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changePage(state) {
      state.page = state.page + 1;
    },
    addToFavorite(state, action) {
      state.favorite = [...state.favorite, action.payload];
    },
    removeFromFavorite(state, action) {
      const index = state.favorite.findIndex(
        (item) => item.id === action.payload
      );
      state.favorite.splice(index, 1);
    },
    addSelectedCar(state, action) {
      state.selectedCar = action.payload;
    },
    removeSelectedCar(state) {
      state.selectedCar = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(carsThunk.fulfilled, (state, action) => {
      if (state.cars.length > 0) {
        state.cars = [...state.cars, ...action.payload];
      }
      if (state.cars.length === 0) {
        state.cars = action.payload;
      }
      if (action.payload.length === 0 || action.payload.length < 12) {
        state.isLoadBtn = false;
      }
    });
  },
});

export const {
  changePage,
  addToFavorite,
  removeFromFavorite,
  addSelectedCar,
  removeSelectedCar,
} = slice.actions;
export const carsSlice = slice.reducer;

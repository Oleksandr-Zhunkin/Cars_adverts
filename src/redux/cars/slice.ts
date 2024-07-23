import { createSlice } from "@reduxjs/toolkit";
import { carsThunk } from "./operations";
import { CarsState } from "../../types/types";

const initialState: CarsState = {
  cars: [],
  favorite: [],
  page: 1,
  isLoadBtn: true,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(carsThunk.fulfilled, (state, action) => {
      if (state.cars.length === 0) {
        state.cars = action.payload;
      }

      state.cars = state.cars.map((car) =>
        car.id === action.payload.id ? { ...car, ...action.payload } : car
      );
      if (action.payload.length === 0 || action.payload.length < 12) {
        state.isLoadBtn = false;
      }
    });
  },
});

export const carsSlice = slice.reducer;

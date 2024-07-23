import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  favorite: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const carsSlice = slice.reducer;

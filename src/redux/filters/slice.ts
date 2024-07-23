import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    brand: "",
    pricePerHour: null,
    minRun: null,
    maxRun: null,
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export const filtersSlice = slice.reducer;

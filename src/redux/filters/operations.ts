import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../api/carsApi";
import { AxiosError } from "axios";
import { Car } from "../../types/types";

export type FiltersData = Car[];
export const filtersDataThunk = createAsyncThunk<FiltersData, void>(
  "filters",
  async (_, thunkApi: any) => {
    try {
      const { data } = await carsApi.get("/adverts");

      return data as FiltersData;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      } else {
        console.log("Unexpected error");
      }
    }
  }
);

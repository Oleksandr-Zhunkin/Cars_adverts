import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../api/carsApi";
import { AxiosError } from "axios";

export const carsThunk = createAsyncThunk(
  "cars",
  async (page: number, thunkApi) => {
    try {
      const options = {
        params: {
          page: page,
          limit: 12,
        },
      };
      const { data } = await carsApi.get("/adverts", options);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      } else {
        console.log("Unexpected error");
      }
    }
  }
);

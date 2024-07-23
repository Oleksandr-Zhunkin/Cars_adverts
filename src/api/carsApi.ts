import axios from "axios";

export const carsApi = axios.create({
  baseURL: "https://669f7de0b132e2c136fe0c98.mockapi.io",
});

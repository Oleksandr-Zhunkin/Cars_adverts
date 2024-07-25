import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./cars/slice";
import { filtersSlice } from "./filters/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  WebStorage,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const carsConfig = {
  key: "favorite",
  version: 1,
  storage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  cars: persistReducer(carsConfig, carsSlice),
  filters: filtersSlice,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

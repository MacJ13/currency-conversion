import type { Action, ThunkAction } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";

import currencyReducer from "./currency/currencySlice";
import nbpReducer from "./nbp/nbpSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    nbp: nbpReducer,
  },
});

// Infer the type of store
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
// Infer the 'AppDispatch' type from the store itself
export type AppDispatch = AppStore["dispatch"];
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

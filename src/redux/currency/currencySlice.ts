import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CurrencyState, CurrencyOrigin } from "../types/currency";

// Define the TS type for the counter slice's state

// export type Origin = "invoice" | "nbp";

// Define the initial value for the slice state
const initialCounter = {
  baseCurrency: "",
  counterCurrency: "",
  resultCurrency: 0,
};

const initialState: CurrencyState = {
  origin: "invoice",
  counter: initialCounter,
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  // The 'reducers' field lets us define reducers and generate associated actiosn
  reducers: {
    chooseOrigin: (state, action: PayloadAction<CurrencyOrigin>) => {
      const origin = action.payload;

      state.origin = origin;
    },
  },
});

// Export the generate actoin creators for use in components
export const { chooseOrigin } = currencySlice.actions;

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectCurrencyOrigin = (state: RootState) => state.currency.origin;

// export the slice reducer for use in the store configuration
export default currencySlice.reducer;
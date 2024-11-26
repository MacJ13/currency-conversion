import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  CurrencyState,
  CurrencyOrigin,
  NBPCurrencyData,
  InvoiceCurrencyData,
} from "../types/currency";

// Define the TS type for the counter slice's state

// export type Origin = "invoice" | "nbp";

// Define the initial value for the slice state

const nbpCurrencyData: NBPCurrencyData = {
  baseCurrency: "",
  counterCurrency: "",
  baseRate: 0,
  counterRate: 0,
  baseDate: "",
  counterDate: "",
  baseNo: "",
  counterNo: "",
  error: null,
  status: "idle",
};

const invoiceCurrencyData: InvoiceCurrencyData = {
  baseCurrency: "",
  counterCurrency: "",
};

const initialState: CurrencyState = {
  origin: "invoice",
  invoiceCurrencyData,
  nbpCurrencyData,
  // counter: initialCounter,
  conversionRate: 0,
};

// function time(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async thunk to fetch users from an API
export const fetchCurrencyNBP = createAsyncThunk(
  "currency/fetchCurrencyNBP",
  async (_, { getState }) => {
    const state = getState() as RootState;

    const { nbpBase, nbpCurrent } = state.nbp;

    try {
      const [res1, res2] = await Promise.all([
        fetch(
          `https://api.nbp.pl/api/exchangerates/rates/${nbpBase.table}/${nbpBase.currency}/${nbpBase.date}/`
        ),
        fetch(
          `https://api.nbp.pl/api/exchangerates/rates/${nbpCurrent.table}/${nbpCurrent.currency}/${nbpCurrent.date}/`
        ),
      ]);

      [res1, res2].forEach((res) => {
        if (!res.ok) throw Error(res.statusText);
      });

      const table1 = await res1.json();
      const table2 = await res2.json();

      return [table1, table2];
    } catch (err) {
      throw err;
    }
  }
);

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

      state.invoiceCurrencyData = invoiceCurrencyData;
      state.nbpCurrencyData = nbpCurrencyData;
      state.conversionRate = 0;
    },
    countCurrencyFromInvoice: (
      state,
      action: PayloadAction<{
        baseCurrency: string;
        counterCurrency: string;
        rate: number;
      }>
    ) => {
      state.invoiceCurrencyData.baseCurrency = action.payload.baseCurrency;
      state.invoiceCurrencyData.counterCurrency =
        action.payload.counterCurrency;
      state.conversionRate = +action.payload.rate.toFixed(4);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyNBP.pending, (state) => {
        // state.nbpCurrencyData.status = "loading";
        state.nbpCurrencyData = { ...nbpCurrencyData, status: "loading" };
      })
      .addCase(fetchCurrencyNBP.fulfilled, (state, action) => {
        state.nbpCurrencyData.status = "succeeded";

        const [base, counter] = action.payload;

        state.nbpCurrencyData.baseCurrency = base.code;
        state.nbpCurrencyData.baseRate = base.rates[0].mid;
        state.nbpCurrencyData.baseDate = base.rates[0].effectiveDate;
        state.nbpCurrencyData.baseNo = base.rates[0].no;

        state.nbpCurrencyData.counterCurrency = counter.code;
        state.nbpCurrencyData.counterRate = counter.rates[0].mid;
        state.nbpCurrencyData.counterDate = counter.rates[0].effectiveDate;
        state.nbpCurrencyData.counterNo = counter.rates[0].no;

        const conversion = base.rates[0].mid / counter.rates[0].mid;

        state.conversionRate = +conversion.toFixed(4);
      })
      .addCase(fetchCurrencyNBP.rejected, (state, action) => {
        state.nbpCurrencyData.status = "failed";

        state.nbpCurrencyData.error =
          action.error.message +
          ". Sróbuj ponownie wypełnić pola danych dla nbp";
      });
  },
});

// Export the generate actoin creators for use in components
export const { chooseOrigin, countCurrencyFromInvoice } = currencySlice.actions;

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectCurrencyOrigin = (state: RootState) => state.currency.origin;

// export const selectCurrencyCounter = (state: RootState) =>
//   state.currency.;
export const selectCurrencyRate = (state: RootState) =>
  state.currency.conversionRate;

export const selectNBPCurrencies = (state: RootState) =>
  state.currency.nbpCurrencyData;

export const selectInvoiceCurrencies = (state: RootState) =>
  state.currency.invoiceCurrencyData;

export const isLoadingStatus = (state: RootState) =>
  state.currency.nbpCurrencyData.status === "loading";

export const selectNBPError = (state: RootState) =>
  state.currency.nbpCurrencyData.error;

export const selectCurrentCurrency = (state: RootState) => {
  const { baseCurrency, counterCurrency } =
    state.currency.origin === "invoice"
      ? state.currency.invoiceCurrencyData
      : state.currency.nbpCurrencyData;
  return { baseCurrency, counterCurrency };
};

// export the slice reducer for use in the store configuration
export default currencySlice.reducer;

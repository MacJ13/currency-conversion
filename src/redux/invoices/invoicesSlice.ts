import { createSlice } from "@reduxjs/toolkit";
import { InvoiceState } from "../types/invoices";
import { RootState } from "../store";

const initialState: InvoiceState = {
  invoices: [
    {
      id: new Date().valueOf(),
      amount: 0,
      description: "",
    },
  ],
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
});

export const selectInvoicesField = (state: RootState) =>
  state.invoices.invoices;

export default invoicesSlice.reducer;

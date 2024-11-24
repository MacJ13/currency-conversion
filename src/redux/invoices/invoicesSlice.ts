import { createSlice } from "@reduxjs/toolkit";
import { InvoiceState } from "../types/invoices";
import { RootState } from "../store";
import { getRandomId } from "../../utils/helpers/getRandomId";

const initialState: InvoiceState = {
  invoices: [
    {
      id: getRandomId(),
      amount: 0,
      description: "",
    },
  ],
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addField: (state) => {
      state.invoices = [
        ...state.invoices,
        {
          id: getRandomId(),
          amount: 0,
          description: "",
        },
      ];
    },
  },
});

export const { addField } = invoicesSlice.actions;

export const selectInvoicesField = (state: RootState) =>
  state.invoices.invoices;

export default invoicesSlice.reducer;

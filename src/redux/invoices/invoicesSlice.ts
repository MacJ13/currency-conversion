import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    removeField: (state, action: PayloadAction<number>) => {
      if (state.invoices.length <= 1) return;
      const id = action.payload;

      state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
    },
  },
});

export const { addField, removeField } = invoicesSlice.actions;

export const selectInvoicesField = (state: RootState) =>
  state.invoices.invoices;

export default invoicesSlice.reducer;

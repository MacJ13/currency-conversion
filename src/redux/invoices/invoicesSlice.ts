import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Invoice, InvoiceState } from "../types/invoices";
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
      if (state.invoices.length === 0) return;
      const id = action.payload;

      state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
    },
    updateField: (state, action: PayloadAction<Invoice>) => {
      const { id, amount, description } = action.payload;

      state.invoices = state.invoices.map((invoice) => {
        if (id === invoice.id) {
          return { ...invoice, amount, description };
        }
        return invoice;
      });
    },
  },
});

export const { addField, removeField, updateField } = invoicesSlice.actions;

export const selectInvoicesField = (state: RootState) =>
  state.invoices.invoices;

export default invoicesSlice.reducer;

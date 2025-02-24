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
      objection: "",
      isObjectionVisible: false,
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
          objection: "",
          isObjectionVisible: false,
        },
      ];
    },
    removeField: (state, action: PayloadAction<number>) => {
      if (state.invoices.length === 0) return;
      const id = action.payload;

      state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
    },
    updateField: (state, action: PayloadAction<Invoice>) => {
      const { id, amount, description, objection } = action.payload;

      state.invoices = state.invoices.map((invoice) => {
        if (id === invoice.id) {
          return { ...invoice, amount, description, objection };
        }
        return invoice;
      });
    },
    toggleObjection: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.invoices = state.invoices.map((invoice) => {
        if (id === invoice.id) {
          return {
            ...invoice,
            objection: invoice.isObjectionVisible ? "" : invoice.objection,
            isObjectionVisible: !invoice.isObjectionVisible,
          };
        }

        return invoice;
      });
    },
    initInvoices: (state) => {
      state.invoices = [
        {
          id: getRandomId(),
          amount: 0,
          description: "",
          objection: "",
          isObjectionVisible: false,
        },
      ];
    },
  },
});

export const {
  addField,
  removeField,
  updateField,
  initInvoices,
  toggleObjection,
} = invoicesSlice.actions;

export const selectInvoicesField = (state: RootState) =>
  state.invoices.invoices;

export default invoicesSlice.reducer;

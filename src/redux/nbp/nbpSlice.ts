import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { NBP } from "../types/currency";
import { NBP, NBPBoard, NBPCurrency, NBPDate } from "../types/nbp";
import { RootState } from "../store";

const initialBaseNBP: NBP = {
  type: "nbpBase",
  label: "Waluta bazowa",
  table: "a",
  currency: "",
  date: "",
};

const initialCurrentNBP: NBP = {
  type: "nbpCurrent",
  label: "Waluta kwotowana",
  table: "b",
  currency: "",
  date: "",
};

const initialState: NBPBoard = {
  nbpBase: initialBaseNBP,
  nbpCurrent: initialCurrentNBP,
};

export const nbpSlice = createSlice({
  name: "nbp",
  initialState,
  reducers: {
    changeNBPTable: (
      state,
      action: PayloadAction<{ type: string; table: "a" | "b" }>
    ) => {
      const currentTable = action.payload.table as "a" | "b";
      const type = action.payload.type;

      state[type].table = currentTable;
    },

    enterNBPCurrency: (state, action: PayloadAction<NBPCurrency>) => {
      const currentCurrency = action.payload.currency;

      const type = action.payload.type;

      state[type].currency = currentCurrency;
    },

    enterNBPDate: (state, action: PayloadAction<NBPDate>) => {
      const date = action.payload.date;
      const type = action.payload.type;

      state[type].date = date;
    },
  },
});

export const { changeNBPTable, enterNBPDate, enterNBPCurrency } =
  nbpSlice.actions;

export const selectNBPBoard = (state: RootState) => {
  return state.nbp;
};

export const selectCurrentNbp = (state: RootState, current: string) =>
  state.nbp[current];

export const isDisabledNbpButton = (state: RootState) => {
  const { nbpBase, nbpCurrent } = state.nbp;

  const validDate = Boolean(nbpBase.date) && Boolean(nbpCurrent.date);
  const validCurrency =
    nbpBase.currency.length === 3 && nbpCurrent.currency.length === 3;

  return !(validDate && validCurrency);
};

export default nbpSlice.reducer;

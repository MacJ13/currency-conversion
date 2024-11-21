export type CurrencyCounter = {
  baseCurrency: string;
  counterCurrency: string;
  resultCurrency: number;
};

export type CurrencyOrigin = "invoice" | "nbp";

export type NBP = {
  type: string;
  label: string;
  table: "a" | "b";
  currency: string;
  date: string;
  value: number;
};

export type CurrencyState = {
  origin: CurrencyOrigin;
  counter: CurrencyCounter;
  nbpTable: {
    [key: string]: NBP;
    nbpBase: NBP;
    nbpCurrent: NBP;
  };
};

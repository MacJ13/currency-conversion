type CurrencyCounter = {
  baseCurrency: string;
  counterCurrency: string;
  resultCurrency: number;
};

export type CurrencyOrigin = "invoice" | "nbp";

export type CurrencyState = {
  origin: CurrencyOrigin;
  counter: CurrencyCounter;
};

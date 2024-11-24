export type CurrencyOrigin = "invoice" | "nbp";

type CurrencyData = {
  baseCurrency: string;
  counterCurrency: string;
};

export type InvoiceCurrencyData = CurrencyData;

export type NBPCurrencyData = CurrencyData & {
  baseRate: number;
  counterRate: number;
  baseDate: string;
  counterDate: string;
  error?: null | string;
  status?: "idle" | "loading" | "succeeded" | "failed";
};

export type CurrencyState = {
  origin: CurrencyOrigin;
  invoiceCurrencyData: InvoiceCurrencyData;
  nbpCurrencyData: NBPCurrencyData;
  conversionRate: number;
};

export type Invoice = {
  id: number;
  amount: number;
  description: string;
};

export type InvoiceState = {
  invoices: Invoice[];
};

export type Invoice = {
  id: number;
  amount: number;
  description: string;
  objection: string;
  isObjectionVisible: boolean;
};

export type InvoiceState = {
  invoices: Invoice[];
};

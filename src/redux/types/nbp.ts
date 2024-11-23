export type NBP = {
  type: string;
  label: string;
  table: "a" | "b";
  currency: string;
  date: string;
  // value?: number;
};

export type NBPCurrency = {
  type: string;
  currency: string;
};

export type NBPDate = {
  type: string;
  date: string;
};

export type NBPTable = {
  type: string;
  table: "a" | "b";
};

export type NBPBoard = {
  [key: string]: NBP;
  nbpBase: NBP;
  nbpCurrent: NBP;
};

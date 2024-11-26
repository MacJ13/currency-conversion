export const convertDate = (date: string, symbol: string) =>
  date.split("-").reverse().join(symbol);

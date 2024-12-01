import { NBP } from "../../redux/types/nbp";

export const getNBPRateEnpoint = ({ table, currency, date }: NBP) =>
  `${table}/${currency}/${date}/`;

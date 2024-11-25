import { useSelector } from "react-redux";

import CurrencyOrigin from "./CurrencyOrigin";
import { selectCurrencyOrigin } from "../../redux/currency/currencySlice";
import CurrencyEntryInvoice from "./CurrencyEntryInvoice";
import CurrencyEntryNbp from "./CurrencyEntryNbp";
import Invoices from "../invoices/Invoices";

const Currency = () => {
  const origin = useSelector(selectCurrencyOrigin);

  return (
    <div className="px-5">
      <CurrencyOrigin />

      {origin === "invoice" ? <CurrencyEntryInvoice /> : <CurrencyEntryNbp />}

      <Invoices />
    </div>
  );
};

export default Currency;

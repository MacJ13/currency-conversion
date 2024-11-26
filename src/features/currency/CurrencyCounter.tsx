import { useSelector } from "react-redux";

import { selectCurrencyOrigin } from "../../redux/currency/currencySlice";

import CurrencyEntryInvoice from "./CurrencyEntryInvoice";
import CurrencyEntryNbp from "./CurrencyEntryNbp";

const CurrencyCounter = () => {
  const origin = useSelector(selectCurrencyOrigin);

  return (
    <div className="border-b-2 py-7 border-sky-800">
      {origin === "invoice" ? <CurrencyEntryInvoice /> : <CurrencyEntryNbp />}
    </div>
  );
};

export default CurrencyCounter;

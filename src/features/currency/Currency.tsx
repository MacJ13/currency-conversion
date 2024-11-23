import { useSelector } from "react-redux";

import CurrencyOrigin from "./CurrencyOrigin";
import { selectCurrencyOrigin } from "../../redux/currency/currencySlice";
import CurrencyEntryInvoice from "./CurrencyEntryInvoice";
import CurrencyEntryNbp from "./CurrencyEntryNbp";

const Currency = () => {
  const origin = useSelector(selectCurrencyOrigin);

  return (
    <div>
      <CurrencyOrigin />

      {origin === "invoice" ? <CurrencyEntryInvoice /> : <CurrencyEntryNbp />}
    </div>
  );
};

export default Currency;

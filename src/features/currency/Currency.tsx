import CurrencyOrigin from "./CurrencyOrigin";
import Invoices from "../invoices/Invoices";
import CurrencyCounter from "./CurrencyCounter";

const Currency = () => {
  return (
    <div>
      <CurrencyOrigin />
      <CurrencyCounter />
      <Invoices />
    </div>
  );
};

export default Currency;

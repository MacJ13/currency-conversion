import { useSelector } from "react-redux";
import { selectCurrencyOrigin } from "../../redux/currency/currencySlice";
import PrintNBP from "./PrintNBP";
import PrintInvoice from "./PrintInvoice";

const Print = () => {
  const origin = useSelector(selectCurrencyOrigin);

  return (
    <div className="font-mono">
      {origin === "nbp" ? <PrintNBP /> : <PrintInvoice />}
    </div>
  );
};

export default Print;

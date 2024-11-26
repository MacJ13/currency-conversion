import { useSelector } from "react-redux";
import { selectCurrencyOrigin } from "../../redux/currency/currencySlice";
import PrintNBP from "./PrintNBP";
import PrintInvoice from "./PrintInvoice";
import PrintInvoiceFields from "./PrintInvoiceFields";

const Print = () => {
  const origin = useSelector(selectCurrencyOrigin);

  return (
    <div className="font-mono flex flex-col gap-14 px-5 w-[72.5%]">
      {origin === "nbp" ? <PrintNBP /> : <PrintInvoice />}
      <PrintInvoiceFields />
    </div>
  );
};

export default Print;

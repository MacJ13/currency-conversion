import { useSelector } from "react-redux";
import { selectInvoicesField } from "../../redux/invoices/invoicesSlice";
import {
  selectCurrencyRate,
  selectCurrentCurrency,
  selectNBPError,
} from "../../redux/currency/currencySlice";
import Flex from "../../components/flex/Flex";
import PrintField from "./PrintField";

const PrintInvoiceFields = () => {
  const invoices = useSelector(selectInvoicesField);

  const currencyRate = useSelector(selectCurrencyRate);

  const { baseCurrency, counterCurrency } = useSelector(selectCurrentCurrency);

  const error = useSelector(selectNBPError);

  if (error) return null;

  const invoicesEl = invoices.map((invoice) => {
    // const result = formatDecimalPlaces(invoice.amount / currencyRate, 2);

    if (!invoice.amount && !invoice.description) return null;

    return (
      <PrintField
        invoice={invoice}
        baseCurrency={baseCurrency}
        counterCurrency={counterCurrency}
        currencyRate={currencyRate}
      />
    );
  });

  return <Flex className="flex flex-col gap-6">{invoicesEl}</Flex>;
};

export default PrintInvoiceFields;

import { useSelector } from "react-redux";
import {
  selectCurrencyRate,
  selectInvoiceCurrencies,
} from "../../redux/currency/currencySlice";
import Flex from "../../components/flex/Flex";
import Heading from "../../components/heading/Heading";
import { upperCase } from "../../utils/helpers/upperCase";

const PrintInvoice = () => {
  const conversionRate = useSelector(selectCurrencyRate);
  const { baseCurrency, counterCurrency } = useSelector(
    selectInvoiceCurrencies
  );

  const baseCode = upperCase(baseCurrency);

  const counterCode = upperCase(counterCurrency);

  if (!conversionRate) return null;

  return (
    <Flex className="flex flex-col">
      <Heading type="h2" className=" mb-4 text-lg">
        Kurs zgodny z zał. fakturą z wymiany kursu walut z{" "}
        {<strong>{baseCode}</strong>} na {<strong>{counterCode}</strong>}:
      </Heading>
      <Flex className="flex text-2xl ">
        <div className="ml-3 pb-2 border-b-2 border-black">
          {" "}
          1 {baseCode} = {conversionRate.toFixed(4)} {counterCode}
        </div>
      </Flex>
    </Flex>
  );
};

export default PrintInvoice;

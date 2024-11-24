import { useSelector } from "react-redux";
import {
  isLoadingStatus,
  selectCurrencyRate,
  selectNBPCurrencies,
  selectNBPError,
} from "../../redux/currency/currencySlice";
import Flex from "../../components/flex/Flex";
import { formatDecimalPlaces } from "../../utils/helpers/formatDecimalPlaces";

const PrintNBP = () => {
  const conversionRate = useSelector(selectCurrencyRate);

  const loading = useSelector(isLoadingStatus);

  const nbpError = useSelector(selectNBPError);

  const {
    baseCurrency,
    baseDate,
    baseRate,
    counterCurrency,
    counterDate,
    counterRate,
  } = useSelector(selectNBPCurrencies);

  if (loading)
    return <Flex className="flex justify-center">Wczytywanie...</Flex>;

  if (nbpError) return <Flex className="flex justify-center">{nbpError}.</Flex>;

  if (!conversionRate) return null;

  return (
    <Flex className="flex flex-col justify-center">
      <Flex className="flex flex-col mb-4 text-xl">
        <div>
          1 {baseCurrency} = {baseRate} PLN (z dnia {baseDate})
        </div>
        <div>
          1 {counterCurrency} = {counterRate} PLN (z dnia {counterDate})
        </div>
      </Flex>
      <Flex className="text-xl mb-4 ">
        {baseRate} / {counterRate} &#8776; {conversionRate}
      </Flex>
      <Flex className="flex text-3xl ">
        <div className="pb-2 border-b-2 border-black">
          {" "}
          1 {baseCurrency} = {formatDecimalPlaces(conversionRate, 4)}{" "}
          {counterCurrency}
        </div>
      </Flex>
    </Flex>
  );
};

export default PrintNBP;

import { useSelector } from "react-redux";
import {
  isLoadingStatus,
  selectCurrencyRate,
  selectNBPCurrencies,
  selectNBPError,
} from "../../redux/currency/currencySlice";
import Flex from "../../components/flex/Flex";
import { formatDecimalPlaces } from "../../utils/helpers/formatDecimalPlaces";
import LinkNBP from "./LinkNBP";
import { generateFractionalNumber } from "../../utils/helpers/generateFractionalNumber";

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
    baseNo,
    counterNo,
  } = useSelector(selectNBPCurrencies);

  if (loading)
    return <Flex className="flex justify-center">Wczytywanie...</Flex>;

  if (nbpError) return <Flex className="flex justify-center">{nbpError}.</Flex>;

  if (!conversionRate) return null;

  const baseRateFractional = generateFractionalNumber(baseRate);
  const counterRateFractional = generateFractionalNumber(counterRate);
  return (
    <Flex className="flex flex-col justify-center">
      <Flex className="flex flex-col mb-4 text-lg">
        <div>
          1 {baseCurrency} = {baseRateFractional} PLN (
          <LinkNBP issue={baseNo} date={baseDate} />)
        </div>
        <div>
          1 {counterCurrency} = {counterRate} PLN (
          <LinkNBP issue={counterNo} date={counterDate} />)
        </div>
      </Flex>
      <Flex className="ml-3 text-xl mb-2">
        {baseRateFractional} / {counterRateFractional} &#8776; {conversionRate}
      </Flex>
      <Flex className="flex text-2xl ">
        <div className="ml-3 pb-1 border-b-2 border-black">
          {" "}
          1 {baseCurrency} = {formatDecimalPlaces(conversionRate, 4)}{" "}
          {counterCurrency}
        </div>
      </Flex>
    </Flex>
  );
};

export default PrintNBP;

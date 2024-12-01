import { useSelector } from "react-redux";
import {
  isLoadingStatus,
  selectCurrencyRate,
  selectNBPCurrencies,
  selectNBPError,
} from "../../redux/currency/currencySlice";
import Flex from "../../components/flex/Flex";
import { formatDecimalPlaces } from "../../utils/helpers/formatDecimalPlaces";
import { convertDate } from "../../utils/helpers/convertDate";
import { getNbpLink } from "../../utils/helpers/getNbpLink";
import LinkNBP from "./LinkNBP";

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

  // const baseNbpLink = getNbpLink(baseNo, baseDate);
  // const counterNbpLink = getNbpLink(counterNo, counterDate);

  return (
    <Flex className="flex flex-col justify-center">
      <Flex className="flex flex-col mb-4 text-lg">
        <div>
          1 {baseCurrency} = {baseRate} PLN (
          {/* <a target="_blank" href={baseNbpLink}>
            z dnia {convertDate(baseDate, "/")}
          </a> */}
          <LinkNBP issue={baseNo} date={baseDate} />)
        </div>
        <div>
          1 {counterCurrency} = {counterRate} PLN (
          {/* <a target="_blank" href={counterNbpLink}>
            z dnia {convertDate(counterDate, "/")})
          </a> */}
          <LinkNBP issue={counterNo} date={counterDate} />)
        </div>
      </Flex>
      <Flex className="ml-3 text-xl mb-2">
        {baseRate} / {counterRate} &#8776; {conversionRate}
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

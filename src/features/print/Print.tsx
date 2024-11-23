import { useSelector } from "react-redux";
import { selectCurrencyRate } from "../../redux/currency/currencySlice";

const Print = () => {
  const conversionRate = useSelector(selectCurrencyRate);
  return (
    <div>
      <div>Druk</div>
      <div>kurs: {conversionRate}</div>
    </div>
  );
};

export default Print;

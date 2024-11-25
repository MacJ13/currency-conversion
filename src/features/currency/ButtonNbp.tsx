import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import {
  fetchCurrencyNBP,
  // isDisabledNbpButton,
} from "../../redux/currency/currencySlice";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { isDisabledNbpButton } from "../../redux/nbp/nbpSlice";

const ButtonNbp = () => {
  const disabled = useSelector(isDisabledNbpButton);

  const dispatch = useAppDispatch();

  // const nbpTable = useSelector(selectNBPTable);

  return (
    <Button
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  opacity-100 disabled:opacity-50"
      onClick={() => {
        // console.log(nbpdata);

        dispatch(fetchCurrencyNBP());
      }}
    >
      Przelicz
    </Button>
  );
};

export default ButtonNbp;
